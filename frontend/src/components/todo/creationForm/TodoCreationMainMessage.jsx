import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function TodoCreationMainMessage() {
    return (
        <Grid item xs={12} sm={5} md={4}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h5">Create new todo</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}