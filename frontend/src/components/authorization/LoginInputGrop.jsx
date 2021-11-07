import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import useValidatedInput from "../../hooks/useValidatedInput";
import LoginInputMonitor from "./LoginInputMonitor";
import { useLoginForUser } from "../../hooks/GraphQL/mutations/userMutations";
import authorizationActions from "../../store/authorization/authorizationActionCreators";
import { logLoginUserRequest } from "../../store/login/loginActionCreators";
import { setToken } from "../../storage/tokenStorage";
import { TODOS_PATH } from "../../routes/consts";
import userActions from "../../store/user/userActionCreators";

export default function LoginInputGroup() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userLoginMutation = useLoginForUser();
    const { data, error, loading } = userLoginMutation.result;
    const nickName = useValidatedInput("", { minLength: 8, maxLength: 200 });
    const password = useValidatedInput("", { minLength: 8, maxLength: 200 });

    const loginUserRequest = useSelector((state) => state.login.loginUserRequest);

    const loginHandler = async () => {
        try {
            userLoginMutation.loginUserMutation({
                variables: {
                    nickName: nickName.basic.value,
                    password: password.basic.value,
                },
            });
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (loginUserRequest) {
            loginHandler();
            dispatch(logLoginUserRequest(false))
        }
    }, [loginUserRequest]);

    useEffect(() => {
        if (data) {
            dispatch(authorizationActions.setAuthorized(true));
            dispatch(authorizationActions.setToken(data.login.token))
            if(data?.login?.token){
                setToken(data.login.token)
                dispatch(userActions.setId(data.login._id));
                dispatch(userActions.setNickName(data.login.nickName));
                dispatch(userActions.setToken(data.login.token));
            }
            history.push(`${TODOS_PATH}`)
        }
    }, [data]);
    return (
        <>
            <LoginInputMonitor password={password} nickName={nickName}/>
            <Grid item xs={12}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={8} md={6} lg={5}>
                        <TextField
                            {...nickName.basic}
                            error={nickName.errorStatus}
                            helperText="At least 8 characters."
                            required
                            type="text"
                            autoComplete='nickname'
                            fullWidth
                            label="Nickname"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={8} md={6} lg={5}>
                        <TextField
                            {...password.basic}
                            error={password.errorStatus}
                            helperText="At least 8 characters."
                            required
                            type="password"
                            autoComplete="password"
                            fullWidth
                            label="Password"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}