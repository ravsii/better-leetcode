import { SessionStorage } from "../auth/session"

const endpoint = new URL("https://leetcode.com/graphql/")

interface queryBody {
  query: string;
  variables?: variables;
  operationName?: string;
}

interface variables {
  [key: string]: string | number | object;
}

interface opts {
  variables?: variables;
  operationName?: string;
  method?: string;
}

/**
 * leetRequest performs a request to leetcode.
 * @param query GraphQL query string
 * @param opts GrqphQL options (variables, operationName)
 * @returns response.json() as T
 */
export const leetRequest = async <T>(
  query: string,
  opts: opts = {},
): Promise<T> => {
  opts.method = "POST"

  const body: queryBody = { query: query }
  if (opts.variables) {
    body.variables = opts.variables
  }
  if (opts.operationName) {
    body.operationName = opts.operationName
  }

  return leetURLRequest(endpoint, "POST", body)
}

export const leetURLRequest = async <T>(
  url: URL,
  method: string,
  body?: object,
): Promise<T> => {
  const token = SessionStorage.instance.get()

  const req: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Cookie: `csrftoken=${token}`,
    },
  }

  if (body) {
    req.body = JSON.stringify(body)
  }

  return await fetch(url, req) as T
}
