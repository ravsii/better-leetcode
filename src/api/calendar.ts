// {
//     "query": "\n    query dailyCodingQuestionRecords($year: Int!, $month: Int!) {\n  dailyCodingChallengeV2(year: $year, month: $month) {\n    challenges {\n      date\n      userStatus\n      link\n      question {\n        questionFrontendId\n        title\n        titleSlug\n      }\n    }\n    weeklyChallenges {\n      date\n      userStatus\n      link\n      question {\n        questionFrontendId\n        title\n        titleSlug\n        isPaidOnly\n      }\n    }\n  }\n}\n    ",
//     "variables": {
//         "year": 2024,
//         "month": 3
//     },
//     "operationName": "dailyCodingQuestionRecords"
// }
