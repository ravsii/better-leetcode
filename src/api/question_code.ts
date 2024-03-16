import { Data, Question } from "../models"
import { leetRequest } from "./request"

interface response {
  question: Question;
}

export const getQuestionCode = async (titleSlug: string): Promise<Question> => {
    const res = await leetRequest<Data<response>>(codeQuery, {
        variables: {
            titleSlug: titleSlug,
        },
    })
    return res.data.question
}

const codeQuery = `#graphql
query questionEditorData($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
        # questionId
        # questionFrontendId
        codeSnippets {
            # lang
            langSlug
            code
        }
        # envInfo
        # enableRunCode
        # hasFrontendPreview
        # frontendPreviews
    }
}
`
