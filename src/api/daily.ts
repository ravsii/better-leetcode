import { DailyQuestion, Data } from "../models"
import { leetRequest } from "./request"

const operationName = "questionOfToday"

interface response {
    activeDailyCodingChallengeQuestion: DailyQuestion
}

export const getDailyQuestion = async (): Promise<DailyQuestion> => {
    const res = await leetRequest<Data<response>>(dailyQuery, {
        operationName: operationName
    })
    return res.data.activeDailyCodingChallengeQuestion
}

const dailyQuery = `#graphql
query questionOfToday {
  activeDailyCodingChallengeQuestion {
    date
    userStatus  
    link 
    question {
      acRate  
      difficulty
    #   freqBar see models.ts 
      frontendQuestionId: questionFrontendId
      isFavor
      paidOnly: isPaidOnly
      status
      title
      titleSlug
      hasVideoSolution
      hasSolution
      topicTags {
        name
        id
        slug
      }
    }
  }
}
`
