import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useButtonStyles from "../../styles/buttonStyles";
import { logLoginUserRequest, logResetInputs } from "../../store/login/loginActionCreators";

export default function LoginButtonGroup() {
    const buttonStyles = useButtonStyles();
    const dispatch = useDispatch();
    const password = useSelector(state=> state.login.password);
    const nickName = useSelector(state=> state.login.nickName);
    const callResetInputs = () => {
        dispatch(logResetInputs(true));
        dispatch(logLoginUserRequest(false));
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
                                disabled={!password.valid || !nickName.valid}
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid style={{ paddingTop: 10 }} item xs={12}>
                            <Button
                                className={buttonStyles.fullWidth}
                                variant="outlined"
                                color="secondary"
                                onClick={callResetInputs}
                                disabled={!password.dirty && !nickName.dirty}
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
