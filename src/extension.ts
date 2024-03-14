import * as vscode from "vscode"
import { signIn, signOut } from "./auth/auth"
import { SessionStorage } from "./auth/session"
import { preview } from "./commands/preview"
import { ProblemSetProvider } from "./explorer/problemSetProvider"
import { StatsProvider } from "./explorer/statsProvider"

export function activate(context: vscode.ExtensionContext) {
    SessionStorage.init(context)

    // all context subs pushes are inside each provider
    new ProblemSetProvider(context)
    const statsProvider = new StatsProvider()
    context.subscriptions.push(
        // commands
        vscode.commands.registerCommand("betterLeetcode.signIn", signIn),
        vscode.commands.registerCommand("betterLeetcode.signOut", signOut),
        vscode.commands.registerCommand("betterLeetcode.previewProblem", preview),

        // views
        vscode.window.createTreeView("betterLeetcodeStats", { treeDataProvider: statsProvider })
    )
}

export function deactivate() { }
