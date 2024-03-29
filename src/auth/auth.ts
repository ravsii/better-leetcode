import * as vscode from "vscode"
import { authPing } from "../api/auth"
import { Session, SessionStorage } from "./session"

export const signIn = async () => {
    const ss = SessionStorage.instance
    const curSession = await ss.get()
    if (curSession) {
        vscode.window.showInformationMessage(
            `You already signed in as ${curSession.username}`,
        )
        return
    }

    const username = await vscode.window.showInputBox({
        placeHolder: "username",
        ignoreFocusOut: true,
        prompt: "Just a username, not an email",
        title: "Enter your Leetcode username",
    })

    if (!username) {
        vscode.window.showWarningMessage("Username can't be empty")
        return
    }

    const userToken = await vscode.window.showInputBox({
        placeHolder: "csrftoken",
        password: true,
        ignoreFocusOut: true,
        prompt: "Entire cookie value is also accepted",
        title: "Enter your csrftoken token",
    })

    if (!userToken) {
        vscode.window.showWarningMessage("Token can't be empty")
        return
    }

    const newSession: Session = {
        token: userToken,
        username: username,
    }

    vscode.window.withProgress(
        {
            location: vscode.ProgressLocation.Notification,
            title: "Singing in...",
            cancellable: true,
        },
        async (_, token) => {
            token.onCancellationRequested(() => {
                console.log("User canceled the long running operation")
            })

            await ss.store(newSession)
            if (!(await authPing())) {
                vscode.window.showErrorMessage("Can't ping")
                await ss.delete()
                return
            }

            return
        },
    )

    await vscode.window.showInformationMessage(`Hello, ${newSession.username}`)
}

export const signOut = async () => {
    const ss = SessionStorage.instance
    const curSession = await ss.get()
    if (!curSession) {
        vscode.window.showInformationMessage("You are not signed in")
        return
    }

    vscode.window.showInformationMessage("Bye bye")
}
