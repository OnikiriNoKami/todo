import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function LinkToRegistration() {
    return (
        <Grid item xs={12}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={5}>
                    <Typography variant="h6">
                        Don't have account? <Link underline='hover' href="/registration">Make one</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}