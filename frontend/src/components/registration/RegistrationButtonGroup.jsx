import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useButtonStyles from "../../styles/buttonStyles";
import { regResetInputs } from "../../store/registration/registrationActionCreators";

export default function RegistrationButtonGroup() {
    const buttonStyles = useButtonStyles();
    const dispatch = useDispatch();
    const email = useSelector(state=>state.registration.email);
    const password = useSelector(state=> state.registration.password);
    const nickName = useSelector(state=> state.registration.nickName);
    const callResetInputs = () => {
        dispatch(regResetInputs(true))
    }
    return (
        <Grid item xs={12}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={5}>
                    <Grid container spacing={3} justifyContent="space-between">
                        <Grid style={{ paddingTop: 10 }} item xs={12}>
                            <Button
                                className={buttonStyles.fullWidth}
                                variant="outlined"
                                color="primary"
                                type='submit'
                                disabled={!password.valid || !(email.valid || email.isDefault) || !nickName.valid}
                            >
                                Registration
                            </Button>
                        </Grid>
                        <Grid style={{ paddingTop: 10 }} item xs={12}>
                            <Button
                                className={buttonStyles.fullWidth}
                                variant="outlined"
                                color="secondary"
                                onClick={callResetInputs}
                                disabled={!password.dirty && !email.dirty && !nickName.dirty}
                            >
                                reset
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
