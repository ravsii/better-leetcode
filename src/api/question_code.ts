// {
//     "query": "\n    query questionEditorData($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    questionId\n    questionFrontendId\n    codeSnippets {\n      lang\n      langSlug\n      code\n    }\n    envInfo\n    enableRunCode\n    hasFrontendPreview\n    frontendPreviews\n  }\n}\n    ",
//     "variables": {
//         "titleSlug": "two-sum"
//     },
//     "operationName": "questionEditorData"
// }
// {
//     "data": {
//         "question": {
//             "questionId": "1",
//             "questionFrontendId": "1",
//             "codeSnippets": [
//                 {
//                     "lang": "C++",
//                     "langSlug": "cpp",
//                     "code": "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        \n    }\n};"
//                 },
//                 {
//                     "lang": "Java",
//                     "langSlug": "java",
//                     "code": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        \n    }\n}"
//                 },
//                 {
//                     "lang": "Python",
//                     "langSlug": "python",
//                     "code": "class Solution(object):\n    def twoSum(self, nums, target):\n        \"\"\"\n        :type nums: List[int]\n        :type target: int\n        :rtype: List[int]\n        \"\"\"\n        "
//                 },
//                 {
//                     "lang": "Python3",
//                     "langSlug": "python3",
//                     "code": "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        "
//                 },
//                 {
//                     "lang": "C",
//                     "langSlug": "c",
//                     "code": "/**\n * Note: The returned array must be malloced, assume caller calls free().\n */\nint* twoSum(int* nums, int numsSize, int target, int* returnSize) {\n    \n}"
//                 },
//                 {
//                     "lang": "C#",
//                     "langSlug": "csharp",
//                     "code": "public class Solution {\n    public int[] TwoSum(int[] nums, int target) {\n        \n    }\n}"
//                 },
//                 {
//                     "lang": "JavaScript",
//                     "langSlug": "javascript",
//                     "code": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    \n};"
//                 },
//                 {
//                     "lang": "TypeScript",
//                     "langSlug": "typescript",
//                     "code": "function twoSum(nums: number[], target: number): number[] {\n    \n};"
//                 },
//                 {
//                     "lang": "PHP",
//                     "langSlug": "php",
//                     "code": "class Solution {\n\n    /**\n     * @param Integer[] $nums\n     * @param Integer $target\n     * @return Integer[]\n     */\n    function twoSum($nums, $target) {\n        \n    }\n}"
//                 },
//                 {
//                     "lang": "Swift",
//                     "langSlug": "swift",
//                     "code": "class Solution {\n    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {\n        \n    }\n}"
//                 },
//                 {
//                     "lang": "Kotlin",
//                     "langSlug": "kotlin",
//                     "code": "class Solution {\n    fun twoSum(nums: IntArray, target: Int): IntArray {\n        \n    }\n}"
//                 },
//                 {
//                     "lang": "Dart",
//                     "langSlug": "dart",
//                     "code": "class Solution {\n  List<int> twoSum(List<int> nums, int target) {\n    \n  }\n}"
//                 },
//                 {
//                     "lang": "Go",
//                     "langSlug": "golang",
//                     "code": "func twoSum(nums []int, target int) []int {\n    \n}"
//                 },
//                 {
//                     "lang": "Ruby",
//                     "langSlug": "ruby",
//                     "code": "# @param {Integer[]} nums\n# @param {Integer} target\n# @return {Integer[]}\ndef two_sum(nums, target)\n    \nend"
//                 },
//                 {
//                     "lang": "Scala",
                    // "langSlug": "scala",
//                     "code": "object Solution {\n    def twoSum(nums: Array[Int], target: Int): Array[Int] = {\n        \n    }\n}"
//                 },
//                 {
//                     "lang": "Rust",
//                     "langSlug": "rust",
//                     "code": "impl Solution {\n    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {\n        \n    }\n}"
//                 },
//                 {
//                     "lang": "Racket",
//                     "langSlug": "racket",
//                     "code": "(define/contract (two-sum nums target)\n  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))\n  )"
//                 },
//                 {
//                     "lang": "Erlang",
//                     "langSlug": "erlang",
//                     "code": "-spec two_sum(Nums :: [integer()], Target :: integer()) -> [integer()].\ntwo_sum(Nums, Target) ->\n  ."
//                 },
//                 {
//                     "lang": "Elixir",
//                     "langSlug": "elixir",
//                     "code": "defmodule Solution do\n  @spec two_sum(nums :: [integer], target :: integer) :: [integer]\n  def two_sum(nums, target) do\n    \n  end\nend"
//                 }
//             ],
//             "envInfo": "{\"cpp\": [\"C++\", \"<p>Compiled with <code> clang 17 </code> using the latest C++ 20 standard, and <code>libstdc++</code> provided by GCC 11.</p>\\r\\n\\r\\n<p>Your code is compiled with level two optimization (<code>-O2</code>). <a href=\\\"https://github.com/google/sanitizers/wiki/AddressSanitizer\\\" target=\\\"_blank\\\">AddressSanitizer</a> is also enabled to help detect out-of-bounds and use-after-free bugs.</p>\\r\\n\\r\\n<p>Most standard library headers are already included automatically for your convenience.</p>\"], \"java\": [\"Java\", \"<p><code>OpenJDK 21</code>. Using compile arguments: <code>--enable-preview --release 21</code></p>\\r\\n\\r\\n<p>Most standard library headers are already included automatically for your convenience.</p>\\r\\n<p>Includes <code>Pair</code> class from https://docs.oracle.com/javase/8/javafx/api/javafx/util/Pair.html.</p>\"], \"python\": [\"Python\", \"<p><code>Python 2.7.12</code>.</p>\\r\\n\\r\\n<p>Most libraries are already imported automatically for your convenience, such as <a href=\\\"https://docs.python.org/2/library/array.html\\\" target=\\\"_blank\\\">array</a>, <a href=\\\"https://docs.python.org/2/library/bisect.html\\\" target=\\\"_blank\\\">bisect</a>, <a href=\\\"https://docs.python.org/2/library/collections.html\\\" target=\\\"_blank\\\">collections</a>. If you need more libraries, you can import it yourself.</p>\\r\\n\\r\\n<p>For Map/TreeMap data structure, you may use <a href=\\\"http://www.grantjenks.com/docs/sortedcontainers/\\\" target=\\\"_blank\\\">sortedcontainers</a> library.</p>\\r\\n\\r\\n<p>Note that Python 2.7 <a href=\\\"https://www.python.org/dev/peps/pep-0373/\\\" target=\\\"_blank\\\">will not be maintained past 2020</a>. For the latest Python, please choose Python3 instead.</p>\"], \"c\": [\"C\", \"<p>Compiled with <code>gcc 11</code> using the gnu11 standard.</p>\\r\\n\\r\\n<p>Your code is compiled with level one optimization (<code>-O2</code>). <a href=\\\"https://github.com/google/sanitizers/wiki/AddressSanitizer\\\" target=\\\"_blank\\\">AddressSanitizer</a> is also enabled to help detect out-of-bounds and use-after-free bugs.</p>\\r\\n\\r\\n<p>Most standard library headers are already included automatically for your convenience.</p>\\r\\n\\r\\n<p>For hash table operations, you may use <a href=\\\"https://troydhanson.github.io/uthash/\\\" target=\\\"_blank\\\">uthash</a>. \\\"uthash.h\\\" is included by default. Below are some examples:</p>\\r\\n\\r\\n<p><b>1. Adding an item to a hash.</b>\\r\\n<pre>\\r\\nstruct hash_entry {\\r\\n    int id;            /* we'll use this field as the key */\\r\\n    char name[10];\\r\\n    UT_hash_handle hh; /* makes this structure hashable */\\r\\n};\\r\\n\\r\\nstruct hash_entry *users = NULL;\\r\\n\\r\\nvoid add_user(struct hash_entry *s) {\\r\\n    HASH_ADD_INT(users, id, s);\\r\\n}\\r\\n</pre>\\r\\n</p>\\r\\n\\r\\n<p><b>2. Looking up an item in a hash:</b>\\r\\n<pre>\\r\\nstruct hash_entry *find_user(int user_id) {\\r\\n    struct hash_entry *s;\\r\\n    HASH_FIND_INT(users, &user_id, s);\\r\\n    return s;\\r\\n}\\r\\n</pre>\\r\\n</p>\\r\\n\\r\\n<p><b>3. Deleting an item in a hash:</b>\\r\\n<pre>\\r\\nvoid delete_user(struct hash_entry *user) {\\r\\n    HASH_DEL(users, user);  \\r\\n}\\r\\n</pre>\\r\\n</p>\"], \"csharp\": [\"C#\", \"<p><a href=\\\"https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-12\\\" target=\\\"_blank\\\">C# 12</a> with .NET 8 runtime</p>\"], \"javascript\": [\"JavaScript\", \"<p><code>Node.js 20.10.0</code>.</p>\\r\\n\\r\\n<p>Your code is run with <code>--harmony</code> flag, enabling <a href=\\\"http://node.green/\\\" target=\\\"_blank\\\">new ES6 features</a>.</p>\\r\\n\\r\\n<p><a href=\\\"https://lodash.com\\\" target=\\\"_blank\\\">lodash.js</a> library is included by default.</p>\\r\\n\\r\\n<p>For Priority Queue / Queue data structures, you may use 5.4.0 version of <a href=\\\"https://github.com/datastructures-js/priority-queue/blob/v5/README.md\\\" target=\\\"_blank\\\">datastructures-js/priority-queue</a> and 4.2.3 version of <a href=\\\"https://github.com/datastructures-js/queue/tree/v4.2.3\\\" target=\\\"_blank\\\">datastructures-js/queue</a>.</p>\"], \"ruby\": [\"Ruby\", \"<p><code>Ruby 3.2</code></p>\\r\\n\\r\\n<p>Some common data structure implementations are provided in the Algorithms module: https://www.rubydoc.info/github/kanwei/algorithms/Algorithms</p>\"], \"swift\": [\"Swift\", \"<p><code>Swift 5.9</code>.</p>\\r\\n\\r\\n<p>You may use <a href=\\\"https://github.com/apple/swift-algorithms/tree/1.2.0\\\" target=\\\"_blank\\\">swift-algorithms 1.2.0</a> and <a href=\\\"https://github.com/apple/swift-collections/tree/1.0.6\\\" target=\\\"_blank\\\">swift-collections 1.0.6</a>.</p>\"], \"golang\": [\"Go\", \"<p><code>Go 1.21</code></p>\\r\\n<p>Support <a href=\\\"https://github.com/emirpasic/gods/tree/v1.18.1\\\" target=\\\"_blank\\\">https://godoc.org/github.com/emirpasic/gods@v1.18.1</a> library.</p>\"], \"python3\": [\"Python3\", \"<p><code>Python 3.11</code>.</p>\\r\\n\\r\\n<p>Most libraries are already imported automatically for your convenience, such as <a href=\\\"https://docs.python.org/3/library/array.html\\\" target=\\\"_blank\\\">array</a>, <a href=\\\"https://docs.python.org/3/library/bisect.html\\\" target=\\\"_blank\\\">bisect</a>, <a href=\\\"https://docs.python.org/3/library/collections.html\\\" target=\\\"_blank\\\">collections</a>. If you need more libraries, you can import it yourself.</p>\\r\\n\\r\\n<p>For Map/TreeMap data structure, you may use <a href=\\\"http://www.grantjenks.com/docs/sortedcontainers/\\\" target=\\\"_blank\\\">sortedcontainers</a> library.</p>\"], \"scala\": [\"Scala\", \"<p><code>Scala 3.3.1</code>.</p>\"], \"kotlin\": [\"Kotlin\", \"<p><code>Kotlin 1.9.0</code>.</p>\\r\\n\\r\\n<p>We are using an experimental compiler provided by JetBrains.</p>\"], \"rust\": [\"Rust\", \"<p><code>Rust 1.74.1</code></p>\\r\\n\\r\\n<p>Supports <a href=\\\"https://crates.io/crates/rand\\\" target=\\\"_blank\\\">rand </a> v0.6\\u00a0from crates.io</p>\"], \"php\": [\"PHP\", \"<p><code>PHP 8.2</code>.</p>\\r\\n<p>With bcmath module</p>\"], \"typescript\": [\"Typescript\", \"<p><code>TypeScript 5.1.6, Node.js 20.10.0</code>.</p>\\r\\n\\r\\n<p>Compile Options: <code>--alwaysStrict --strictBindCallApply --strictFunctionTypes --target ES2022</code></p>\\r\\n\\r\\n<p>Your code is run with <code>--harmony</code> flag, enabling <a href=\\\"http://node.green/\\\" target=\\\"_blank\\\">new ES2022 features</a>.</p>\\r\\n\\r\\n<p><a href=\\\"https://lodash.com\\\" target=\\\"_blank\\\">lodash.js</a> library is included by default.</p>\"], \"racket\": [\"Racket\", \"<p><a href=\\\"https://docs.racket-lang.org/guide/performance.html#%28tech._c%29\\\" target=\\\"_blank\\\">Racket CS</a> v8.11</p>\\r\\n\\r\\n<p>Using <code>#lang racket</code></p>\\r\\n\\r\\n<p>Required <code>data/gvector data/queue data/order data/heap</code> automatically for your convenience</p>\"], \"erlang\": [\"Erlang\", \"Erlang/OTP 26\"], \"elixir\": [\"Elixir\", \"Elixir 1.15 with Erlang/OTP 26\"], \"dart\": [\"Dart\", \"<p>Dart 3.2</p>\\r\\n\\r\\n<p>Your code will be run directly without compiling</p>\"]}",
//             "enableRunCode": true,
//             "hasFrontendPreview": false,
//             "frontendPreviews": "{}"
//         }
//     }
// }