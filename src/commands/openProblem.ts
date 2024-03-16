import * as path from "path"
import * as vscode from "vscode"
import { getQuestionCode } from "../api/question_code"
import { ProblemListItem } from "../explorer/problemSetProvider"
import { Question } from "../models"
import { settings } from "../settings"

const encoder = new TextEncoder()
const start = "@lc code=start"
const end = "@lc code=end"

interface Code {
  slug: string;
  code: string;
}

export const openProblem = async (item: ProblemListItem) => {
    if (!(item instanceof ProblemListItem) || !item?.question) {
        return
    }

    const prefLang = settings.preferredLanguage
    const fallbackLang = settings.fallbackLanguage
    const q = item.question
    let uri: vscode.Uri

    // this is some shit
    // NOTE: rewrite from scratch
    // TODO: also change logic: do a full circle for pref lang first (check file, create), then fallback
    try {
        const fileName = `${q.frontendQuestionId}.${q.titleSlug}.${langFormat[prefLang]}`
        const prefUri = vscode.Uri.file(path.join(settings.baseDirPath, fileName))
        await vscode.workspace.fs.stat(prefUri)
        uri = prefUri
    } catch {
        try {
            const fileName = `${q.frontendQuestionId}.${q.titleSlug}.${langFormat[fallbackLang]}`
            const fallbackUri = vscode.Uri.file(
                path.join(settings.baseDirPath, fileName),
            )
            await vscode.workspace.fs.stat(fallbackUri)
            uri = fallbackUri
        } catch {
            // both files don't exist
            const code = await getCodeFor(q)
            if (!code) {
                return
            }

            const fileName = `${q.frontendQuestionId}.${q.titleSlug}.${langFormat[code.slug]}`
            uri = vscode.Uri.file(path.join(settings.baseDirPath, fileName))
            await vscode.workspace.fs.writeFile(uri, encoder.encode(code.code))
        }
    }

    vscode.window.showTextDocument(uri, {
        preview: false,
        viewColumn: vscode.ViewColumn.Active,
    })
}

const getCodeFor = async (question: Question): Promise<Code | undefined> => {
    const prefLang = settings.preferredLanguage
    const fallbackLang = settings.fallbackLanguage
    const code = (await getQuestionCode(question.titleSlug)).codeSnippets
        ?.filter((snippet) => {
            return snippet.langSlug === prefLang || snippet.langSlug === fallbackLang
        })
        .sort((_, b) => {
            if (b.langSlug == prefLang) {
                return 1
            }
            return -1
        })
    if (!code || code.length == 0) {
        vscode.window.showInformationMessage(
            `${question.title} doesn't suppoer ${prefLang} or ${fallbackLang}`,
        )
        return
    }

    return {
        slug: code[0].langSlug,
        code: `${singleLineCommentToken[code[0].langSlug]} ${start}

${code[0].code}

${singleLineCommentToken[code[0].langSlug]} ${end}`,
    }
}

const singleLineCommentToken: { [key: string]: string } = {
    bash: "#",
    c: "//",
    cpp: "//",
    csharp: "//",
    dart: "//",
    elixir: "#",
    erlang: "%",
    golang: "//",
    java: "//",
    javascript: "//",
    kotlin: "//",
    mssql: "--",
    mysql: "--",
    oraclesql: "--",
    php: "//",
    postgresql: "--",
    python: "#",
    python3: "#",
    pythondata: "#",
    pythonml: "#",
    racket: ";",
    react: "//",
    ruby: "#",
    rust: "//",
    scala: "//",
    swift: "//",
    typescript: "//",
    vanillajs: "//",
}
const langFormat: { [key: string]: string } = {
    bash: "sh",
    c: "c",
    cpp: "cpp",
    csharp: "cs",
    dart: "dart",
    elixir: "ex",
    erlang: "erl",
    golang: "go",
    java: "java",
    javascript: "js",
    kotlin: "kt",
    mssql: "sql",
    mysql: "sql",
    oraclesql: "sql",
    php: "php",
    postgresql: "sql",
    python: "py",
    python3: "py",
    pythondata: "py",
    pythonml: "py",
    racket: "rkt",
    react: "js",
    ruby: "rb",
    rust: "rs",
    scala: "scala",
    swift: "swift",
    typescript: "ts",
    vanillajs: "js",
}
