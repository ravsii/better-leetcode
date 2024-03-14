import * as vscode from "vscode"
import { getDailyQuestion } from "../api/daily"
import { CategorySlug, getQuestionList } from "../api/problems"
import { ProblemSet, Question } from "../models"

type ListItem = ProblemSetListItem | ProblemListItem

export class ProblemSetProvider implements vscode.TreeDataProvider<ListItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<ListItem | undefined | null | void> = new vscode.EventEmitter<ListItem | undefined | null | void>()
    readonly onDidChangeTreeData: vscode.Event<ListItem | undefined | null | void> = this._onDidChangeTreeData.event

    constructor(context: vscode.ExtensionContext) {
        context.subscriptions.push(
            vscode.commands.registerCommand("betterLeetcode.refreshProblems", this.refresh),
            vscode.window.createTreeView("betterLeetcodeProblems", { treeDataProvider: this })
        )
    }

    refresh(): void {
        this._onDidChangeTreeData.fire()
    }

    getTreeItem(element: ListItem): vscode.TreeItem {
        return element
    }

    async getChildren(item?: ListItem): Promise<ListItem[]> {
        if (!item) { // root
            return Promise.resolve(this.getRootCategories())
        }

        if (item instanceof ProblemSetListItem) { // folders
            return Promise.resolve(this.getSubCategories(item.category))
        }

        // if not a folder, then it's an item with no children.
        return Promise.resolve([])
    }

    private getRootCategories(): ProblemSetListItem[] {
        return [
            new ProblemSetListItem("Daily", Category.Daily),
            new ProblemSetListItem("All", Category.All),
            new ProblemSetListItem("Categories", Category.Categories),
        ]
    }

    private async getSubCategories(category: Category): Promise<Array<ListItem>> {
        switch (category) {
        case Category.Categories:
            return [
                new ProblemSetListItem("Algorithms", Category.Algorithms),
                new ProblemSetListItem("Concurrency", Category.Concurrency),
                new ProblemSetListItem("Database", Category.Database),
                new ProblemSetListItem("Javascript", Category.Javascript),
                new ProblemSetListItem("Pandas", Category.Pandas),
                new ProblemSetListItem("Shell", Category.Shell),
            ]

            // Categories with no sub-categories handled here
        default:
            return this.getCategoryProblems(category)
        }
    }

    private async getCategoryProblems(category: Category): Promise<Array<ListItem>> {
        if (category === Category.Daily) {
            const dailyQuestion = await getDailyQuestion()
            return [new ProblemListItem(dailyQuestion.question)]
        }

        let result: ProblemSet
        switch (category) {
        case Category.All:
            result = await getQuestionList(CategorySlug.ALL, {}, 5000, 0)
            break
        case Category.Algorithms:
            result = await getQuestionList(CategorySlug.Algorithms, {}, 5000, 0)
            break
        case Category.Concurrency:
            result = await getQuestionList(CategorySlug.Concurrency, {}, 5000, 0)
            break
        case Category.Database:
            result = await getQuestionList(CategorySlug.Database, {}, 5000, 0)
            break
        case Category.Javascript:
            result = await getQuestionList(CategorySlug.Javascript, {}, 5000, 0)
            break
        case Category.Pandas:
            result = await getQuestionList(CategorySlug.Pandas, {}, 5000, 0)
            break
        case Category.Shell:
            result = await getQuestionList(CategorySlug.Shell, {}, 5000, 0)
            break
        default:
            return []
        }

        const problems = result.questions.map<ProblemListItem>((v) => {
            return new ProblemListItem(v)
        })
        return problems
    }


}

enum Category {
    Daily,
    All,
    Categories,
    Algorithms,
    Concurrency,
    Database,
    Javascript,
    Pandas,
    Shell,
}

class ProblemSetListItem extends vscode.TreeItem {
    category: Category

    constructor(public readonly name: string, category: Category,) {
        super(name, vscode.TreeItemCollapsibleState.Collapsed)
        this.category = category
        this.iconPath = new vscode.ThemeIcon("folder")
    }
}

export class ProblemListItem extends vscode.TreeItem {
    constructor(public readonly question: Question) {
        super(
            `${question.frontendQuestionId}. ${question.title}`,
            vscode.TreeItemCollapsibleState.None
        )
        this.question = question
        this.command = {
            command: "betterLeetcode.previewProblem",
            arguments: [this.question],
            title: "Preview problem"
        }
    }
}
