import { Data, QuestionContent } from "../models"
import { leetRequest } from "./request"

const operationName = "questionContent"

interface response {
  question: QuestionContent;
}

export const getQuestionContent = async (
    titleSlug: string,
): Promise<QuestionContent> => {
    const res = await leetRequest<Data<response>>(dailyQuery, {
        operationName: operationName,
        variables: {
            titleSlug: titleSlug,
        },
    })
    return res.data.question
}

const dailyQuery = `#graphql
query questionContent($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    content
    mysqlSchemas
    dataSchemas
  }
}
`
