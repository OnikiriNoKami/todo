import { gql } from "@apollo/client";

export const getTodos = gql`
    query Queries {
        getTodos {
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

export const getTodosWithUser = gql`
    query Queries {
        getTodos {
            _id
            title
            description
            statusId
            userId
            beginDate
            endDate
            user {
                _id
                email
                phone
                nickName
                todos
            }
        }
    }
`;

export const getTodoById = gql`
    query Queries($todoId: String!) {
        getTodoById(id: $todoId) {
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

export const getTodosByUserId = gql`
    query Queries($userId: String!) {
        getTodosByUserId(userId: $userId) {
            _id
            title
            description
            statusId
            beginDate
            endDate
            userId
        }
    }
`;

export const getTodoByIdWithUser = gql`
    query Queries($todoId: String!) {
        getTodoById(id: $todoId) {
            _id
            title
            description
            userId
            statusId
            beginDate
            endDate
            user {
                _id
                email
                phone
                nickName
                todos
            }
        }
    }
`;

export const getTodoComments = gql`
    query Queries($todoId: String!) {
        getTodosComments(todoId: $todoId) {
            _id
            body
            userId
        }
    }
`;
