import { createUser } from "../../../GraphQL/mutations/userMutations";
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
