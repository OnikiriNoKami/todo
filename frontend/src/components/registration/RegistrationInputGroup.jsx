import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import useValidatedInput from "../../hooks/useValidatedInput";
import {
    regResetInputs,
    regSetEmailDirty,
    regSetEmailValid,
    regSetPasswordDirty,
    regSetPasswordValid,
    regSetNickNameValid,
    regSetNickNameDirty,
    regSetEmailIsDefault,
    regSetNickNameIsDefault,
    regSetPasswordIsDefault,
} from "../../store/registration/registrationActionCreators";

export default function RegistrationInputGroup() {
    const dispatch = useDispatch();
    const email = useValidatedInput("", { isEmail: true, maxLength: 300 , isDefault: true});
    const nickName = useValidatedInput("", { minLength: 8, maxLength: 200 });
    const password = useValidatedInput("", { minLength: 8, maxLength: 200 });
    const resetRequest = useSelector(
        (state) => state.registration.resetRequest
    );
    const createUserRequest = useSelector(
        (state) => state.registration.createUserRequest
    );

    const resetInputs = () => {
        email.resetInput();
        password.resetInput();
        nickName.resetInput();
        dispatch(regResetInputs(false));
    };

    useEffect(() => {
        if (email.isValidInput) {
            dispatch(regSetEmailValid(true));
        } else {
            dispatch(regSetEmailValid(false));
        }
    }, [email.isValidInput, dispatch]);

    useEffect(() => {
        if (password.isValidInput) {
            dispatch(regSetPasswordValid(true));
        } else {
            dispatch(regSetPasswordValid(false));
        }
    }, [password.isValidInput, dispatch]);

    useEffect(() => {
        if (nickName.isValidInput) {
            dispatch(regSetNickNameValid(true));
        } else {
            dispatch(regSetNickNameValid(false));
        }
    }, [nickName.isValidInput, dispatch]);

    useEffect(() => {
        if (email.focusLost) {
            dispatch(regSetEmailDirty(true));
        } else {
            dispatch(regSetEmailDirty(false));
        }
    }, [email.focusLost, dispatch]);

    useEffect(() => {
        if (password.focusLost) {
            dispatch(regSetPasswordDirty(true));
        } else {
            dispatch(regSetPasswordDirty(false));
        }
    }, [password.focusLost, dispatch]);

    useEffect(() => {
        if (nickName.focusLost) {
            dispatch(regSetNickNameDirty(true));
        } else {
            dispatch(regSetNickNameDirty(false));
        }
    }, [nickName.focusLost, dispatch]);

    useEffect(() => {
        if (email.isDefault) {
            dispatch(regSetEmailIsDefault(true));
        } else {
            dispatch(regSetEmailIsDefault(false));
        }
    }, [email.isDefault, dispatch]);

    // useEffect(() => {
    //     if (password.isDefault) {
    //         dispatch(regSetPasswordIsDefault(true));
    //     } else {
    //         dispatch(regSetPasswordIsDefault(false));
    //     }
    // }, [password.isDefault, dispatch]);

    // useEffect(() => {
    //     if (nickName.isDefault) {
    //         dispatch(regSetNickNameIsDefault(true));
    //     } else {
    //         dispatch(regSetNickNameIsDefault(false));
    //     }
    // }, [nickName.isDefault, dispatch]);

    useEffect(() => {
        if (createUserRequest) {
        }
    }, [createUserRequest]);

    useEffect(() => {
        if (resetRequest) {
            resetInputs();
        }
    }, [resetRequest]);
    return (
        <>
            <Grid item xs={12}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={8} md={6} lg={5}>
                        <TextField
                            {...email.basic}
                            error={email.errorStatus&&!email.isDefault}
                            type="text"
                            helperText="Example: myemail@email.com"
                            fullWidth
                            autoComplete="new-Email"
                            label="Email"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={8} md={6} lg={5}>
                        <TextField
                            {...nickName.basic}
                            error={nickName.errorStatus}
                            helperText="At least 8 characters."
                            required
                            type="text"
                            autoComplete="new-NickName"
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
                            autoComplete="new-Password"
                            fullWidth
                            label="Password"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
