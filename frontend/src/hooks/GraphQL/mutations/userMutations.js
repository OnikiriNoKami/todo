import { createUser, loginUserMut } from "../../../GraphQL/mutations/userMutations";
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
