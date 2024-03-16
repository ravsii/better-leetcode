# Better Leetcode

Solve leetcode problems inside VSCode.

Note: This is still in alpha:

* ⚠️ Works only for EU endpoint (for now)
* ⚠️ Only cookie auth is supported at the moment

## Compatibility

We decided not to reinvent the wheel and adopt the same format as [vscode-leetcode](https://github.com/LeetCode-OpenSource/vscode-leetcode) has for file parsing.

`// @lc code=start` and `// @lc code=end` are used to denote the beginning and the end of the solution.

You can keep using your old files with this extension, yay! (It works the other way around, too!)

## Motivation

This was born mainly due to [vscode-leetcode](https://github.com/LeetCode-OpenSource/vscode-leetcode) being abbandoned and having multiple issues:

* Using extra CLIs under the hood instead of queries LeetCode API directly
* Missing features, like custom tests adding custom tests
* Having no information about what the current daily question is
* Missing visualization for trees and other DS (although this one is very minor, but if we can implement that - then why not)

## Progress

* [x] Auth (Session handler)
* [x] Request API
* [x] Problem list
* [x] Preview Problem
* [x] Open problem as code
  * [x] `// @leet` tags as begin/end tags
* [ ] Sending submissions
  * [ ] Tests
    * [ ] Add \ Delete \ Edit tests within vscode (vscode-leetcode can't do that)
  * [ ] Submissions
  * [ ] Result screen
* [x] Daily question
* [ ] Stats - In Progress
* [ ] Search
* [ ] Sessions
* [x] Settings
  * [x] Langs (2 setting options for preferred / fallback languages)
  * [x] Files location

## Inspiration

* [vscode-leetcode](https://github.com/LeetCode-OpenSource/vscode-leetcode) as a battle-tested extension example.
* [leetcode.nvim](https://github.com/kawre/leetcode.nvim) as an example of how a proper extension (plugin) should look and behave like.
