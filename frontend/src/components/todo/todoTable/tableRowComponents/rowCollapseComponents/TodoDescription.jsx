import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import useTodoTableCollapsestyles from "../../../../../styles/todo/todoTable/todoTableCollapseBody";

export default function TodoDescription({ item }) {
    const styles = useTodoTableCollapsestyles();
    return (
        <>
            <Grid  container spacing={2} >
                <Grid item xs={12} sm={4}>
                    <Typography
                        variant="h6"
                        className={styles.descriptionLabel}
                    >
                        Description:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography 
                        variand="body1"
                        className={styles.description}
                    >
                        {item.description}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}
