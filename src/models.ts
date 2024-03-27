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

export interface QuestionTest extends Question, QuestionCodeSnippers { }

export interface TopicTag {
    name: string;
    id: string;
    slug: string;
}

export interface TestResult {
    status_code: number
    lang: string
    run_success: boolean
    status_runtime: string
    memory: number
    code_answer: string[]
    /**
     * stdout
     */
    code_output: string[]
    std_output_list: string[]
    elapsed_time: number
    task_finish_time: number
    task_name: string
    expected_status_code: number
    expected_lang: string
    expected_run_success: boolean
    expected_status_runtime: string
    expected_memory: number
    expected_code_answer: string[]
    // expected_code_output: any[] // no idea what this is
    expected_std_output_list: string[]
    expected_elapsed_time: number
    expected_task_finish_time: number
    expected_task_name: string
    correct_answer: boolean
    compare_result: string
    total_correct: number
    total_testcases: number
    runtime_percentile: number
    status_memory: string
    memory_percentile: number
    pretty_lang: string
    submission_id: string
    status_msg: string
    state: InterpreteState
}

export enum InterpreteState {
    "PENDING",
    "STARTED",
    "SUCCESS",
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
