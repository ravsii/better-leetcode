import * as vscode from "vscode";
import { signIn, signOut } from "./auth/auth";
import { SessionStorage } from "./auth/session";
import { ProblemSetProvider } from "./explorer/problemSetProvider";
import { StatsProvider } from "./explorer/statsProvider";

export function activate(context: vscode.ExtensionContext) {
	SessionStorage.init(context);

	const problemSetProvider = new ProblemSetProvider();
	const statsProvider = new StatsProvider();
	context.subscriptions.push(
		// commands
		vscode.commands.registerCommand("betterLeetcode.signIn", signIn),
		vscode.commands.registerCommand("betterLeetcode.signOut", signOut),

		// views
		vscode.window.createTreeView("betterLeetcodeProblems", { treeDataProvider: problemSetProvider }),
		vscode.window.createTreeView("betterLeetcodeStats", { treeDataProvider: statsProvider })
	);
}

export function deactivate() { }
