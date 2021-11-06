import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useButtonStyles from "../../../styles/buttonStyles";


export default function TodoCreationButtonGroup() {
    const buttonStyles = useButtonStyles()
    return (
        <Grid item xs={12}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={10} md={8}>
                    <Grid container spacing={2} justifyContent="space-between">
                        <Grid style={{ paddingTop: 10 }} item xs={12} sm={6}>
                            <Button
                                className={buttonStyles.fullWidth}
                                variant="outlined"
                                color="primary"
                                type='submit'
                                //disabled={!password.valid || !(email.valid || email.isDefault) || !nickName.valid}
                            >
                                create
                            </Button>
                        </Grid>
                        <Grid style={{ paddingTop: 10 }} item xs={12} sm={6}>
                            <Button
                                className={buttonStyles.fullWidth}
                                variant="outlined"
                                color="secondary"
                                //onClick={callResetInputs}
                                //disabled={!password.dirty && !email.dirty && !nickName.dirty}
                            >
                                reset
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
