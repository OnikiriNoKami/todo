import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useButtonStyles from "../../styles/buttonStyles";

export default function RegistrationButtonGroup() {
    const buttonStyles = useButtonStyles();
    return (
        <Grid item xs={12}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={5}>
                    <Grid container spacing={3} justifyContent="space-between">
                        <Grid className={{ paddingTop: 10 }} item xs={12}>
                            <Button
                                className={buttonStyles.fullWidth}
                                variant="outlined"
                                color="primary"
                            >
                                Registration
                            </Button>
                        </Grid>
                        <Grid style={{ paddingTop: 10 }} item xs={12}>
                            <Button
                                className={buttonStyles.fullWidth}
                                variant="outlined"
                                color="secondary"
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
