import * as vscode from "vscode"

export class StatsProvider implements vscode.TreeDataProvider<StatsItem> {
    constructor() { }

    getTreeItem(element: StatsItem): vscode.TreeItem {
        return element
    }

    getChildren(): Thenable<StatsItem[]> { 
        // console.log(element)
        // element.contextValue="123"
        // let res = [new StatsItem("test3"), new StatsItem("test4")]
        return Promise.resolve([])
    }
}

class StatsItem extends vscode.TreeItem {
    constructor(public readonly name: string,) { 
        super(name)
        this.tooltip = `${this.name}`
    }
}
