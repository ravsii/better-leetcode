export interface Data<T> {
  data: T;
}

export interface DailyQuestion {
  date: string;
  userStatus: string;
  link: string;
  question: Question;
}

export enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

export interface ProblemSet {
  questions: Array<Question>;
  total: number;
}

export interface QuestionContent {
  content?: string;
  mysqlSchemas?: Array<string>;
  dataSchemas?: Array<string>;
}

export interface Question {
  acRate: number;
  codeSnippets?: Array<QuestionCodeSnippers>;
  difficulty: Difficulty;
  enableRunCode?: boolean;
  envInfo?: string;
  freqBar: unknown; // I don't have premium so I don't know what to expect
  frontendPreviews?: string;
  frontendQuestionId: number;
  hasFrontendPreview?: boolean;
  hasSolution: boolean;
  hasVideoSolution: boolean;
  isFavor: boolean;
  paidOnly: boolean;
  questionFrontendId?: number;
  questionId?: number;
  status: string;
  title: string;
  titleSlug: string;
  topicTags: Array<TopicTag>;
}

export interface QuestionCodeSnippers {
  lang: string;
  langSlug: string;
  code: string;
}

export interface QuestionTest extends Question, QuestionCodeSnippers {}

export interface TopicTag {
  name: string;
  id: string;
  slug: string;
}

export enum Lang {
  "bash",
  "c",
  "cpp",
  "csharp",
  "dart",
  "elixir",
  "erlang",
  "golang",
  "java",
  "javascript",
  "kotlin",
  "mssql",
  "mysql",
  "oraclesql",
  "php",
  "postgresql",
  "python",
  "python3",
  "pythondata",
  "pythonml",
  "racket",
  "react",
  "ruby",
  "rust",
  "scala",
  "swift",
  "typescript",
  "vanillajs",
}
