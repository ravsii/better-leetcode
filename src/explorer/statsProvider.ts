import * as vscode from 'vscode';

export class StatsProvider implements vscode.TreeDataProvider<StatsItem> {
    constructor() { }

    getTreeItem(element: StatsItem): vscode.TreeItem {
        return element;
    }

    getChildren(element?: StatsItem): Thenable<StatsItem[]> {
        let res = [new StatsItem("test3"), new StatsItem("test4")];
        return Promise.resolve(res);
    }
}

class StatsItem extends vscode.TreeItem {
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
