import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import useValidatedInput from "../../hooks/useValidatedInput";

export default function RegistrationInputGroup() {
    const email = useValidatedInput("", { isEmail: true, maxLength: 300 });
    const password = useValidatedInput("", { minLength: 8, maxLength: 200 });
    return (
        <>
            <Grid item xs={12}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={8} md={6} lg={5}>
                        <TextField
                            {...email.basic}
                            error={email.errorStatus}
                            type="text"
                            helperText="Example: myemail@email.com"
                            fullWidth
                            required
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
