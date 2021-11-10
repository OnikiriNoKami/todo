import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useTodoTableCollapsestyles from "../../../../../styles/todo/todoTable/todoTableCollapseBody";
import TodoDescriptionStatusSelect from "./TodoDescriptionStatusSelect";

export default function TodoDescription({ item }) {
    const styles = useTodoTableCollapsestyles();
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" className={styles.headLabel}>
                        Title:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variand="body1" className={styles.headItem}>
                        {item.title}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" className={styles.itemLabel}>
                        Description:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variand="body1" className={styles.item}>
                        {item.description}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" className={styles.headLabel}>
                        Status:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <TodoDescriptionStatusSelect item={item}/>
                </Grid>
            </Grid>
        </>
    );
}
