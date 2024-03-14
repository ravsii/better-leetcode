import * as vscode from "vscode"
import { getQuestionContent } from "../api/question_content"
import { Question } from "../models"

export const preview = async (q: Question) => {
    const webview = vscode.window.createWebviewPanel("preview", `Preview: ${q.title}`, vscode.ViewColumn.Beside, {})

    const questionContent = await getQuestionContent(q.titleSlug)

    if (questionContent?.content) {
        webview.webview.html = questionContent.content
    } else {
        vscode.window.showErrorMessage("Can't preview ")
    }
}
