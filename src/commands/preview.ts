import MarkdownIt from "markdown-it"
import { NodeHtmlMarkdown } from "node-html-markdown"
import * as vscode from "vscode"
import { getQuestionContent } from "../api/question_content"
import { Question } from "../models"

const htmlToMD = new NodeHtmlMarkdown({ maxConsecutiveNewlines: 2 })
const md = MarkdownIt()

export const preview = async (q: Question) => {
    const webview = vscode.window.createWebviewPanel(
        "preview",
        `Preview: ${q.title}`,
        vscode.ViewColumn.Beside,
        {},
    )

    const questionContent = await getQuestionContent(q.titleSlug)
    if (questionContent?.content) {
        let previewContent = htmlToMD.translate(questionContent.content)
        previewContent = updateText(q,previewContent)
        webview.webview.html = md.render(previewContent)
    } else {
        vscode.window.showErrorMessage(`Can't preview ${q.title}`)
    }
}

const updateText=(q:Question, md:string):string => {
    return `
# ${q.title}
` + md
}
