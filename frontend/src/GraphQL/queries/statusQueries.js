import { gql } from "@apollo/client";

export const getStatusesQuery = gql`
    query Queries {
        statuses {
            _id
            title
        }
    }
`;
