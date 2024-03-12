import * as vscode from "vscode";

export class ProblemSetProvider implements vscode.TreeDataProvider<Problem> {
    constructor() { }

    getTreeItem(element: Problem): vscode.TreeItem {
        return element;
    }

    getChildren(element?: Problem): Thenable<Problem[]> {
        let res = [new Problem("test"), new Problem("test2")];
        return Promise.resolve([]);
    }
}

class Problem extends vscode.TreeItem {
    constructor(
        public readonly name: string,
    ) {
        super(name);
        this.tooltip = `${this.name}`;
    }

    // iconPath = {
    //     light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
    //     dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
    // };
}
