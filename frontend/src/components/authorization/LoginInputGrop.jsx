import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import useValidatedInput from "../../hooks/useValidatedInput";
//import { useCreateUser } from "../../hooks/GraphQL/mutations/userMutations";
//import RegistrationInputMonitor from "./RegistrationInputMonitor";
//import { LOGIN_PATH } from "../../routes/consts";

export default function LoginInputGroup() {
    const history = useHistory();
    //const userCreatorMutation = useCreateUser();

    const nickName = useValidatedInput("", { minLength: 8, maxLength: 200 });
    const password = useValidatedInput("", { minLength: 8, maxLength: 200 });

    // const createUserRequest = useSelector(
    //     (state) => state.registration.createUserRequest
    // );

    // const createHandler = async () => {
    //     try {
    //         await userCreatorMutation.createUserMutation({
    //             variables: {
    //                 email: email.basic.value === "" ? null : email.basic.value,
    //                 nickName: nickName.basic.value,
    //                 password: password.basic.value,
    //             },
    //         });
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    // };

    // useEffect(() => {
    //     if (createUserRequest) {
    //         createHandler();
    //     }
    // }, [createUserRequest]);

    // useEffect(() => {
    //     if (userCreatorMutation.result.data) {
    //         history.push(`${LOGIN_PATH}`)
    //     }
    // }, [userCreatorMutation.result.data]);
    return (
        <>
            {/* <RegistrationInputMonitor
                email={email}
                password={password}
                nickName={nickName}
            /> */}
            <Grid item xs={12}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={8} md={6} lg={5}>
                        <TextField
                            {...nickName.basic}
                            error={nickName.errorStatus}
                            helperText="At least 8 characters."
                            required
                            type="text"
                            autoComplete='nickName'
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