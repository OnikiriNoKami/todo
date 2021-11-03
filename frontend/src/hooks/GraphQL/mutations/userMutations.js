import { createUser, loginUserMut, authUserMut } from "../../../GraphQL/mutations/userMutations";
import { useMutation } from "@apollo/client";

export const useCreateUser = () => {
    const [createUserMutation, { data, loading, error }] =
        useMutation(createUser);

    return {
        createUserMutation,
        result: {
            data,
            loading,
            error,
        },
    };
};

export const useLoginForUser = () => {
    const [loginUserMutation, { data, loading, error }] =
        useMutation(loginUserMut);

    return {
        loginUserMutation,
        result: {
            data,
            loading,
            error,
        },
    };
};

export const useTokenAuth = () => {
    const [authUserMutation, { data, loading, error }] =
        useMutation(authUserMut);

    return {
        authUserMutation,
        result: {
            data,
            loading,
            error,
        },
    };
}
