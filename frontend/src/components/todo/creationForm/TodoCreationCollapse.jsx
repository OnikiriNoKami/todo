import React from "react";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import TodoCreationInputGroup from "./TodoCreationInputGroup";

export default function TodoCreationCollapse() {
    return (
        <Grid item xs={12}>
            <Collapse in={true}>
                <Grid container spacing={2} justifyContent='center'>
                    <TodoCreationInputGroup/>
                </Grid>
            </Collapse>
        </Grid>
    );
}
