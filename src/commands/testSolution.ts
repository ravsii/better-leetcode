import { window } from "vscode"

const identifiers = /@lc.*id=(?<id>\d+).*lang=(?<lang>[a-z]+)/
const codeStart = "@lc code=start"
const codeEnd = "@lc code=end"

export const testSolution = async () => {
    const activeTab = window.activeTextEditor
    if (!activeTab) {
        window.showInformationMessage(
            "Please select/focus a tab with a solution (has to have @lc tags)",
        )
        return
    }

    let problemId: number = -1
    let lang = ""
    let startLine = -1
    let endLine = -1

    const split = activeTab.document.getText().split("\n")
    split.forEach((line: string, i: number) => {
        if (!problemId || !lang) {
            const groups = identifiers.exec(line)?.groups
            if (groups) {
                problemId = parseInt(groups?.id)
                lang = groups?.lang
            }
        }

        if (!startLine && line.includes(codeStart)) {
            startLine = i
        }
        if (!endLine && line.includes(codeEnd)) {
            endLine = i
        }
    })

    if (problemId === -1 || lang === "") {
        window.showErrorMessage("Can't find @lc id=... lang=... line")
        return
    }

    if (startLine === -1) {
        window.showErrorMessage(`Can't find ${codeStart}`)
        return
    }

    if (endLine === -1) {
        window.showErrorMessage(`Can't find ${codeEnd}`)
        return
    }

    const code = split.slice(startLine, endLine).join("\n")
}
