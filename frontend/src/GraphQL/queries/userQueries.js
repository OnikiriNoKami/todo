import { gql } from "@apollo/client";

export const getUserById = gql`
    query Queries($userId: String) {
        getUserById(id: $userId) {
            _id
            email
            phone
            nickName
            todos
        }
    }
`;

export const getUserByNickName = gql`
    query Queries($nickName: String) {
        getUserByNickName(nickName: $nickName) {
            _id
            email
            phone
            todos
            nickName
        }
    }
`;

export const loginUser = gql`
    query Queries($nickName: String!, $password: String!) {
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

export const authUser = gql`
    query Queries($token: String!) {
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

export const getAllUsers = gql`
    query Queries {
        getUsers {
            _id
            email
            phone
            nickName
            todos
        }
    }
`;
