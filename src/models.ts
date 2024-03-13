export interface Data<T> {
    data: T
}

export interface DailyQuestion {
    date: string
    userStatus: string
    link: string
    question: Question
}

export enum Difficulty {
    Easy = "Easy",
    Medium = "Medium",
    Hard = "Hard",
} 
 
export interface ProblemSet {
    questions: Array<Question>
    total: number
}

export interface Question {
    acRate: number
    difficulty: Difficulty
    frontendQuestionId: number,
    hasSolution: boolean
    hasVideoSolution: boolean
    isFavor: boolean
    paidOnly: boolean
    status: string
    title: string
    titleSlug: string
    topicTags: Array<TopicTag>
    // "freqBar": null, i don't have premium, so I don't know what to expect
}

export interface TopicTag {
    name: string
    id: string
    slug: string
}
