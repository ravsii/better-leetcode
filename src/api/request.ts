import { SessionStorage } from "../auth/session";

const endpoint = new URL("https://leetcode.com/graphql/");

export const leetFetch = async <T>(query: string, variables: Object = {}): Promise<T> => {
    let token = SessionStorage.instance.get();

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cookie": `csrftoken=${token}`,
        },
        body: JSON.stringify({
            "query": query,
            "variables": variables,
            // "operationName": "skillStats",
        }),
    });
    return response.json() as T;
};
