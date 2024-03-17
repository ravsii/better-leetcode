import { ExtensionContext, SecretStorage, commands } from "vscode"

export interface Session {
  token: string;
  username: string;
}

const SESSION_KEY = "session"
const CTX_SIGNED_IN = "betterLeetcode.signedIn"

export class SessionStorage {
    private static _instance: SessionStorage

    constructor(private secretStorage: SecretStorage) {}

    static async init(context: ExtensionContext): Promise<void> {
        SessionStorage._instance = new SessionStorage(context.secrets)
        const ss = SessionStorage._instance
        if (await ss.get()) {
            ss.setSignedIn()
        }
    }

    static get instance(): SessionStorage {
        return SessionStorage._instance
    }

    async store(token: Session): Promise<void> {
        this.secretStorage.store(SESSION_KEY, JSON.stringify(token))
        this.setSignedIn()
    }

    async get(): Promise<Session | undefined> {
        const sessionData = await this.secretStorage.get(SESSION_KEY)
        if (!sessionData) {
            return
        }

        return JSON.parse(sessionData) as Session
    }

    async delete(): Promise<void> {
        this.secretStorage.delete(SESSION_KEY)
        this.setSignedOut()
    }

    private async setSignedIn() {
        await commands.executeCommand("setContext", CTX_SIGNED_IN, true)
    }

    private async setSignedOut() {
        await commands.executeCommand("setContext", CTX_SIGNED_IN, false)
    }
}
