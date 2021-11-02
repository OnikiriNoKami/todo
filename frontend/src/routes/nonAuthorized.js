import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import { REGISTRATION_PATH, LOGIN_PATH } from "./consts";

export const nonAuthorized = [
    {
        path: REGISTRATION_PATH,
        component: RegistrationPage,
    },
    {
        path: LOGIN_PATH,
        component: LoginPage,
    }
];
