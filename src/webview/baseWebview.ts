import * as vscode from "vscode"

export abstract class BaseWebview implements vscode.Disposable {
    protected readonly viewType: string = "leetcode.webview"
    protected panel: vscode.WebviewPanel | undefined

    protected show(title: string, content: string): void {
        if (!this.panel) {
            this.panel = vscode.window.createWebviewPanel(
                this.viewType,
                title,
                { preserveFocus: true, viewColumn: vscode.ViewColumn.Active },
                { retainContextWhenHidden: true },
            )
        } else {
            this.panel.title = title
            this.panel.reveal(vscode.ViewColumn.Active, true)
        }
        this.panel.webview.html = content
    }

    public dispose(): void {
        if (this.panel) {
            this.panel.dispose()
        }
    }
}
