// {
//     "query": "\n    query singleQuestionTopicTags($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    topicTags {\n      name\n      slug\n    }\n  }\n}\n    ",
//     "variables": {
//         "titleSlug": "combine-two-tables"
//     },
//     "operationName": "singleQuestionTopicTags"
// }
// {
//     "data": {
//         "question": {
//             "topicTags": [
//                 {
//                     "name": "Array",
//                     "slug": "array"
//                 },
//                 {
//                     "name": "Hash Table",
//                     "slug": "hash-table"
//                 }
//             ]
//         }
//     }
// }
