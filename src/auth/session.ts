import { ExtensionContext, SecretStorage } from "vscode";

export interface Session {
    token: string
    username: string
}

const SESSION_KEY = "session";

export class SessionStorage {
    private static _instance: SessionStorage;

    constructor(private secretStorage: SecretStorage) { }

    static init(context: ExtensionContext): void {
        SessionStorage._instance = new SessionStorage(context.secrets);
    }

    static get instance(): SessionStorage {
        return SessionStorage._instance;
    }

    async store(token: Session): Promise<void> {
        this.secretStorage.store(SESSION_KEY, JSON.stringify(token));
    }

    async get(): Promise<Session | undefined> {
        let sessionData = await this.secretStorage.get(SESSION_KEY);
        if (!sessionData) {
            return;
        }

        return JSON.parse(sessionData) as Session;
    }

    async delete(): Promise<void> {
        this.secretStorage.delete(SESSION_KEY);
    }
}
