import * as vscode from "vscode"
import { signIn, signOut } from "./auth/auth"
import { SessionStorage } from "./auth/session"
import { openProblem } from "./commands/openProblem"
import { previewProblem } from "./commands/previewProblem"
import { ProblemSetProvider } from "./explorer/problemSetProvider"
import { StatsProvider } from "./explorer/statsProvider"
import { previewWebview } from "./webview/previewProvider"

export function activate(context: vscode.ExtensionContext) {
    SessionStorage.init(context)

    // all context subs pushes are inside each provider
    new ProblemSetProvider(context)

    const statsProvider = new StatsProvider()
    context.subscriptions.push(
        previewWebview,

        // commands
        vscode.commands.registerCommand("betterLeetcode.signIn", signIn),
        vscode.commands.registerCommand("betterLeetcode.signOut", signOut),
        vscode.commands.registerCommand(
            "betterLeetcode.previewProblem",
            previewProblem,
        ),
        vscode.commands.registerCommand("betterLeetcode.openProblem", openProblem),

        // views
        vscode.window.createTreeView("betterLeetcodeStats", {
            treeDataProvider: statsProvider,
        }),
    )
}

export function deactivate() {}
