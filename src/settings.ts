import * as vscode from "vscode"

const settingsPrefix = "betterLeetcode"

class Settings {
    private get s(): vscode.WorkspaceConfiguration {
        return vscode.workspace.getConfiguration(settingsPrefix, null)
    }

    get baseDirPath(): string {
        return this.s.get<string>("workspacePath", "")
    }

    get preferredLanguage(): string {
        return this.s.get<string>("preferredLanguage", "")
    }

    get fallbackLanguage(): string {
        return this.s.get<string>("fallbackLanguage", "")
    }
}

export const settings = new Settings()
