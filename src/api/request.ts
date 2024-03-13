import { SessionStorage } from "../auth/session"

const endpoint = new URL("https://leetcode.com/graphql/")

interface queryBody {
    query: string
    variables?: variables
    operationName?: string
}

interface variables {
    [key: string]: any
}
 
interface opts {
    variables?: variables
    operationName?: string
}

/**
 * leetRequest performs a request to leetcode.
 * @param query GraphQL query string
 * @param opts GrqphQL options (variables, operationName)
 * @returns response.json() as T
 */
export const leetRequest = async <T>(query: string, opts: opts = {}): Promise<T> => {
    let token = SessionStorage.instance.get()

    let body: queryBody = { "query": query }
    if (opts.variables) { body.variables = opts.variables }
    if (opts.operationName) { body.operationName = opts.operationName }

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cookie": `csrftoken=${token}`,
        },
        body: JSON.stringify(body),
    })
    return response.json() as T
}
