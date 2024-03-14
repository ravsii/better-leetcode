import { Data, Question } from "../models"
import { leetRequest } from "./request"

const operationName = "questionContent"

interface response {
  question: Question
}

export const getQuestionContent = async (titleSlug: string): Promise<Question> => {
    const res = await leetRequest<Data<response>>(dailyQuery, {
        operationName: operationName,
        variables: {
            titleSlug: titleSlug
        }
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
