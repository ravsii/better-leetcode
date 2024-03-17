import MarkdownIt from "markdown-it"
import { NodeHtmlMarkdown } from "node-html-markdown"
import * as vscode from "vscode"
import { getQuestionContent } from "../api/questionContent"
import { Question } from "../models"
import { previewWebview } from "../webview/previewProvider"

const htmlToMD = new NodeHtmlMarkdown({ maxConsecutiveNewlines: 2 })
const md = MarkdownIt()

export const previewProblem = async (q: Question) => {
    const content = await getQuestionContent(q.titleSlug)
    if (content?.content) {
        let previewContent = htmlToMD.translate(content.content)
        previewContent = updateText(q, previewContent)
        previewWebview.show(q.title, md.render(previewContent))
    } else {
        vscode.window.showErrorMessage(`Can't preview ${q.title}`)
    }
}

const updateText = (q: Question, md: string): string => {
    return (
        `
# ${q.frontendQuestionId}. ${q.title}
` + md
    )
}
