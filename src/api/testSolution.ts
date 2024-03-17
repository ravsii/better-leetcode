import { Lang, Question, QuestionContent } from "../models"
import { leetURLRequest } from "./request"

interface Response {
  interpret_id: string;
  test_case: string;
}

interface Request {
  lang: Lang;
  question_id: number;
  typed_code: string;
  data_input: string;
}
// {
//     "lang": "golang",
//     "question_id": "1",
//     "typed_code": "func twoSum(nums []int, target int) []int {\n    m := make(map[int]int,0)\n\n    for i, n := range nums{\n      if j, exists := m[target-n]; exists{\n        return []int{i,j}\n      }\n\n      m[n] = i\n    }\n\n    return []int{}\n}",
//     "data_input": "[2,7,11,15]\n9\n[3,2,4]\n6\n[3,3]\n6"
// }

export const testSolution = async (
    q: Question,
    code: string,
): Promise<QuestionContent> => {
    const testSolutionURL = new URL(
        `https://leetcode.com/problems/${q.titleSlug}/interpret_solution/`,
    )

    const request: Request = {
        typed_code: code,
    }

    const res = await leetURLRequest(testSolutionURL, "POST", code)
    return res.data.question
}

// step 2: check results
// curl 'https://leetcode.com/submissions/detail/runcode_1710662929.4098806_ZktfttLmJX/check/'
// {"state": "PENDING"} -> {"state": "STARTED"}
// then
// {
//     "status_code": 10,
//     "lang": "golang",
//     "run_success": true,
//     "status_runtime": "2 ms",
//     "memory": 2152000,
//     "code_answer": [
//         "[1,0]",
//         "[2,1]",
//         "[1,0]"
//     ],
//     "code_output": [],
//     "std_output_list": [
//         "",
//         "",
//         "",
//         ""
//     ],
//     "elapsed_time": 53,
//     "task_finish_time": 1710662932380,
//     "task_name": "judger.runcodetask.RunCode",
//     "expected_status_code": 10,
//     "expected_lang": "cpp",
//     "expected_run_success": true,
//     "expected_status_runtime": "0",
//     "expected_memory": 7296000,
//     "expected_code_answer": [
//         "[0,1]",
//         "[1,2]",
//         "[0,1]"
//     ],
//     "expected_code_output": [],
//     "expected_std_output_list": [
//         "",
//         "",
//         "",
//         ""
//     ],
//     "expected_elapsed_time": 29,
//     "expected_task_finish_time": 1710661553145,
//     "expected_task_name": "judger.interprettask.Interpret",
//     "correct_answer": true,
//     "compare_result": "111",
//     "total_correct": 3,
//     "total_testcases": 3,
//     "runtime_percentile": null,
//     "status_memory": "2.2 MB",
//     "memory_percentile": null,
//     "pretty_lang": "Go",
//     "submission_id": "runcode_1710662929.4098806_ZktfttLmJX",
//     "status_msg": "Accepted",
//     "state": "SUCCESS"
// }

// how to get testcases:
// {
//     "query": "\n    query consolePanelConfig($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    questionId\n    questionFrontendId\n    questionTitle\n    enableDebugger\n    enableRunCode\n    enableSubmit\n    enableTestMode\n    exampleTestcaseList\n    metaData\n  }\n}\n    ",
//     "variables": {
//         "titleSlug": "two-sum"
//     },
//     "operationName": "consolePanelConfig"
// }
// {
//     "data": {
//         "question": {
//             "questionId": "1",
//             "questionFrontendId": "1",
//             "questionTitle": "Two Sum",
//             "enableDebugger": true,
//             "enableRunCode": true,
//             "enableSubmit": true,
//             "enableTestMode": false,
//             "exampleTestcaseList": [
//                 "[2,7,11,15]\n9",
//                 "[3,2,4]\n6",
//                 "[3,3]\n6"
//             ],
//             "metaData": "{\n  \"name\": \"twoSum\",\n  \"params\": [\n    {\n      \"name\": \"nums\",\n      \"type\": \"integer[]\"\n    },\n    {\n      \"name\": \"target\",\n      \"type\": \"integer\"\n    }\n  ],\n  \"return\": {\n    \"type\": \"integer[]\",\n    \"size\": 2\n  },\n  \"manual\": false\n}"
//         }
//     }
// }
