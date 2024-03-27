import { Data, InterpreteState, Lang, QuestionContent, TestResult } from "../models"
import { leetURLRequest } from "./request"

// Lifetime: interprete -> get interpete id -> check solution until success

interface InterpreteRequest {
  lang: Lang;
  question_id: number;
  typed_code: string;
  data_input: string;
}

interface InterpreteResponse {
  interpret_id: string
  test_case: string
}

export const interpreteSolution = async (
  slug: string,
  questionId: number,
  lang: Lang,
  code: string,
  tests: string,
): Promise<string> => {
  const testSolutionURL = new URL(
    `https://leetcode.com/problems/${slug}/interpret_solution/`,
  )

  const request: InterpreteRequest = {
    lang: lang,
    question_id: questionId,
    typed_code: code,
    data_input: tests,
  }

  const interpret = await leetURLRequest<Data<InterpreteResponse>>(
    testSolutionURL, "POST", request)
  console.log(await interpret.body)
  return interpret.data.interpret_id

}

export const checkSolution = async (interpreteId: string): Promise<TestResult | InterpreteState> => {
  const interpretResultsURL = new URL(`https://leetcode.com/submissions/detail/${interpreteId}/check/`)

  const result = await leetURLRequest<TestResult>(
    interpretResultsURL, "GET")

  if (result.state === InterpreteState.PENDING ||
    result.state === InterpreteState.STARTED) {
    return result.state
  }

  return result
}

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
