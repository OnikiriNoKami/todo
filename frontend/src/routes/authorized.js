import { TODOS_PATH } from "./consts";
import TodosPage from "../pages/TodosPage";

export const authorized = [
    {
        path: TODOS_PATH,
        component: TodosPage,
    },
];