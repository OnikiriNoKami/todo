import { gql } from "@apollo/client";

export const createTodo = gql`
    mutation Mutations(
        $title: String!
        $userId: String!
        $statusId: String
        $description: String
        $beginDate: String
        $endDate: String
    ) {
        createTodo(
            title: $title
            userId: $userId
            statusId: $statusId
            description: $description
            beginDate: $beginDate
            endDate: $endDate
        ) {
            _id
            title
            description
            userId
            beginDate
            endDate
        }
    }
`;

export const deleteTodo = gql`
    mutation DeleteTodoMutations($todoId: String!) {
        deleteTodo(id: $todoId) {
            _id
            title
            description
            userId
            statusId
            beginDate
            endDate
        }
    }
`;

export const setTodoStatusIdMut = gql`
    mutation Mutations($todoId: String!, $statusId: String!) {
        setStatusId(id: $todoId, statusId: $statusId) {
            _id
            statusId
        }
    }
`;
