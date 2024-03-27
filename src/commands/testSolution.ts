import { ProgressLocation, window } from "vscode"
import { checkSolution, interpreteSolution } from "../api/testSolution"
import { InterpreteState, Lang, TestResult } from "../models"

const codeStart = "@lc code=start"
const codeEnd = "@lc code=end"

export const testSolution = async () => {
  window.withProgress({
    location: ProgressLocation.Notification,
    title: "Sending solution...",
  }, async (progress): Promise<void> => {
    progress.report({ message: "Parsing current tab" })

    const p = new Promise<void>(() => { })

    const activeTab = window.activeTextEditor
    if (!activeTab) {
      window.showInformationMessage(
        "Please select/focus a tab with a solution (has to have @lc tags)",
      )
      return p
    }

    const [problemIdStr, problemSlug, lang] = window.tabGroups.activeTabGroup.activeTab!.label.split(".") as string[]
    if (!problemIdStr || !problemSlug || !lang) {
      window.showInformationMessage("Bad file name, want {id}.{slug}.{lang}")
      return p
    }

    const problemId = parseInt(problemIdStr)
    if (isNaN(problemId)) {
      window.showInformationMessage("Bad ID in file name, want {id}.{slug}.{lang}")
      return p
    }

    // if lang is not found in a map
    // if () {
    //     window.showErrorMessage("Can't find @lc id=... lang=... line")
    //     return
    // }

    let startLine = -1
    let endLine = -1

    const split = activeTab.document.getText().split("\n")
    split.forEach((line: string, i: number) => {
      if (startLine < 0 && line.includes(codeStart)) {
        startLine = i
      }
      if (endLine < 0 && line.includes(codeEnd)) {
        endLine = i
      }
    })

    if (startLine === -1) {
      window.showErrorMessage(`Can't find ${codeStart}`)
      return p
    }

    if (endLine === -1) {
      window.showErrorMessage(`Can't find ${codeEnd}`)
      return p
    }

    const code = split.slice(startLine, endLine).join("\n")

    progress.report({ message: "Interpreting solution..." })
    const interpreteId = await interpreteSolution(problemSlug, problemId, Lang.golang, code, "[1,2,3]\n3")

    const result = await new Promise<TestResult>((resolve) => {
      const checkRetry = setInterval(async () => {
        const result = await checkSolution(interpreteId)
        if (typeof result === "string") {
          progress.report({ message: `Checking solution, state: ${result}` })
        } else {
          clearTimeout(checkRetry)
          resolve(result as TestResult)
        }
      }, 500)
    })

    console.log(result)

    return p
  })
}
