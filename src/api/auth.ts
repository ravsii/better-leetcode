import { leetRequest } from "./request"

interface CurrentTimestamp {
    currentTimestamp: number
}

export const authPing = async (): Promise<boolean> => {
    let result = await leetRequest<CurrentTimestamp>(currentTimestampQuery)
    return result.currentTimestamp > 0
}

const currentTimestampQuery = `#graphql
    query currentTimestamp {
        currentTimestamp 
    }
`
