import { useMutation } from "@apollo/client";
import { createTodo } from "../../../GraphQL/mutations/todoMutations";

export const useCreateTodo = () => {
    const [createTodoMutation, {data, loading, error}] = useMutation(createTodo);

    return {
        createTodoMutation,
        result: {
            data,
            loading,
            error,
        }
    }
}
