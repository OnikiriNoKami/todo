import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import useValidatedInput from "../../hooks/useValidatedInput";
import { useCreateUser } from "../../hooks/GraphQL/mutations/userMutations";
import RegistrationInputMonitor from "./RegistrationInputMonitor";

export default function RegistrationInputGroup() {
    const userCreatorMutation = useCreateUser();
    const email = useValidatedInput("", {
        isEmail: true,
        maxLength: 300,
        isDefault: true,
    });
    const nickName = useValidatedInput("", { minLength: 8, maxLength: 200 });
    const password = useValidatedInput("", { minLength: 8, maxLength: 200 });

    const createUserRequest = useSelector(
        (state) => state.registration.createUserRequest
    );

    const doTheThing = async () => {
        try {
            await userCreatorMutation.createUserMutation({
                variables: {
                    email: email.basic.value === "" ? null : email.basic.value,
                    nickName: nickName.basic.value,
                    password: password.basic.value,
                },
            });
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (createUserRequest) {
            doTheThing();
        }
    }, [createUserRequest]);

    useEffect(() => {
        if (userCreatorMutation.result.loading) {
            console.log("loading user");
        }
    }, [userCreatorMutation.result.loading]);
    return (
        <>
            <RegistrationInputMonitor
                email={email}
                password={password}
                nickName={nickName}
            />
            <Grid item xs={12}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={8} md={6} lg={5}>
                        <TextField
                            {...email.basic}
                            error={email.errorStatus && !email.isDefault}
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
