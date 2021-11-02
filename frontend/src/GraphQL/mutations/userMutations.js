import { gql } from "@apollo/client";

export const createUser = gql`
    mutation CreateUserMutations(
        $email: String
        $phone: String
        $nickName: String!
        $password: String!
    ) {
        createUser(
            email: $email
            phone: $phone
            nickName: $nickName
            password: $password
        ) {
            _id
            email
            phone
            nickName
        }
    }
`;

export const addTodoToUser = gql`
    mutation AddTodoToUserMutations($userId: String!, $todoId: String!) {
        addTodoToUser(userId: $userId, todoId: $todoId) {
            _id
            nickName
            todos
        }
    }
`;

export const removeTodoFromUser = gql`
    mutation RemoveTodoFromUserMutations($userId: String!, $todoId: String!) {
        removeTodoFromUser(userId: $userId, todoId: $todoId) {
            _id
            nickName
            todos
        }
    }
`;
