import * as vscode from "vscode"
import { getDailyQuestion } from "../api/daily"
import { CategorySlug, getQuestionList } from "../api/problems"
import { ProblemSet } from "../models"

export class ProblemSetProvider implements vscode.TreeDataProvider<ProblemItem> {
    constructor() { }

    getTreeItem(element: ProblemItem): vscode.TreeItem {
        return element
    }

    async getChildren(item?: ProblemItem): Promise<ProblemItem[]> {
        if (!item) { // root 
            return Promise.resolve(this.getRootCategories())
        }

        if (item instanceof ProblemSetItem) { // folders
            return Promise.resolve(this.getSubCategories(item.category))
        }

        // if not a folder, then it's an item with no children.
        return Promise.resolve([])
    }

    private getRootCategories(): ProblemSetItem[] {
        return [
            new ProblemSetItem("Daily", vscode.TreeItemCollapsibleState.Collapsed, Category.Daily),
            new ProblemSetItem("All", vscode.TreeItemCollapsibleState.Collapsed, Category.All),
            new ProblemSetItem("Categories", vscode.TreeItemCollapsibleState.Collapsed, Category.Categories),
        ]
    }

    private async getSubCategories(category: Category): Promise<Array<ProblemItem>> {
        switch (category) {
            case Category.Categories:
                return [
                    new ProblemSetItem("Algorithms", vscode.TreeItemCollapsibleState.Collapsed, Category.Algorithms),
                    new ProblemSetItem("Concurrency", vscode.TreeItemCollapsibleState.Collapsed, Category.Concurrency),
                    new ProblemSetItem("Database", vscode.TreeItemCollapsibleState.Collapsed, Category.Database),
                    new ProblemSetItem("Javascript", vscode.TreeItemCollapsibleState.Collapsed, Category.Javascript),
                    new ProblemSetItem("Pandas", vscode.TreeItemCollapsibleState.Collapsed, Category.Pandas),
                    new ProblemSetItem("Shell", vscode.TreeItemCollapsibleState.Collapsed, Category.Shell),
                ]

            // Categories with no sub-categories handled here
            default:
                return this.getCategoryProblems(category) 
        }
    }

    private async getCategoryProblems(category: Category): Promise<Array<ProblemItem>> {
        if (category === Category.Daily) {
            let dailyQuestion = await getDailyQuestion()
            return [new ProblemItem(dailyQuestion.question.title)]
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

        let problems = result.questions.map<ProblemItem>((v) => {
            return new ProblemItem(v.title)
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

class ProblemSetItem extends vscode.TreeItem {
    category: Category

    constructor(
        public readonly name: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState,
        category: Category,
    ) {
        super(name, collapsibleState)
        this.category = category
    }
}

class ProblemItem extends vscode.TreeItem {
    constructor(
        public readonly name: string,
    ) {
        super(name)
    }

    // iconPath = {
    //     light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
    //     dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
    // };
}
