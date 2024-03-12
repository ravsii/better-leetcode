import * as vscode from 'vscode';
import { signIn, signOut } from './auth/auth';
import { SessionStorage } from "./auth/session";

export function activate(context: vscode.ExtensionContext) {
	SessionStorage.init(context);

	context.subscriptions.push(
		vscode.commands.registerCommand('better-leetcode.signIn', signIn),
		vscode.commands.registerCommand('better-leetcode.signOut', signOut),
	);
}

export function deactivate() { }
