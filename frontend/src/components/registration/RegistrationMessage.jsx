import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function RegistrationMessage() {
    return (
        <Grid item xs={12}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={5}>
                    <Typography variant="h5">Registration</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
