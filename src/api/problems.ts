import { Data, ProblemSet } from "../models"
import { leetRequest } from "./request"

const operationName = "problemsetQuestionList"

export enum CategorySlug {
  Algorithms = "algorithms",
  ALL = "all-code-essentials",
  Concurrency = "concurrency",
  Database = "database",
  Javascript = "javascript",
  Pandas = "pandas",
  Shell = "shell", 
}

export const getQuestionList = async (category: CategorySlug, filters = {}, limit = 100, skip = 0): Promise<ProblemSet> => {
  let res = await leetRequest<Data<response>>(problemsQuery, {
    operationName: operationName,
    variables: {
      categorySlug: category,
      filters: filters,
      limit: limit,
      skip: skip,
    }
  })
  return res.data.problemsetQuestionList
}

interface response {
  problemsetQuestionList: ProblemSet
}


const problemsQuery = `#graphql
query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
  problemsetQuestionList: questionList(
    categorySlug: $categorySlug
    limit: $limit
    skip: $skip
    filters: $filters
  ) {
    total: totalNum
    questions: data {
      acRate
      difficulty
      # freqBar
      frontendQuestionId: questionFrontendId
      isFavor
      paidOnly: isPaidOnly
      status
      title
      titleSlug
      topicTags {
        name
        id
        slug
      }
      hasSolution
      hasVideoSolution
    }
  }
}
`
