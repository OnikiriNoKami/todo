import { gql } from "@apollo/client";

export const getTodosTest = gql`
    query Queries {
        getTodos {
            _id
        }
    }
`;
