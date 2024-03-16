# Better Leetcode

Solve leetcode problems inside VSCode.

Note: This is still in alpha:

* ⚠️ Works only for EU endpoint (for now)
* ⚠️ Only cookie auth is supported at the moment

## Motivation

This was born mainly due to [vscode-leetcode](https://github.com/LeetCode-OpenSource/vscode-leetcode) being abbandoned and having multiple issues:

* Using extra CLIs under the hood instead of queries LeetCode API directly
* Missing features, like custom tests adding custom tests
* Having no information about what the current daily question is
* Missing visualization for trees and other DS (although this one is very minor, but if we can implement that - then why not)

## WIP

* [x] Auth (Session handler)
* [x] Request API
* [x] Problem list
* [x] Preview Problem
* [x] Open problem as code
  * [ ] `// @leet` tags as begin/end tags
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
