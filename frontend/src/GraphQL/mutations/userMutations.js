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

export const loginUserMut = gql`
    mutation Mutations($nickName: String!, $password: String!) {
        login(nickName: $nickName, password: $password) {
            _id
            email
            phone
            nickName
            todos
            token
        }
    }
`;

export const authUserMut = gql`
    mutation Mutations($token: String!) {
        auth(token: $token) {
            _id
            email
            phone
            nickName
            todos
            token
        }
    }
`;

