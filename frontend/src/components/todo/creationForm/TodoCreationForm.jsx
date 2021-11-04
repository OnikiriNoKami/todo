import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useBoxStyles from "../../../styles/boxStyles";
import TodoCreationCollapse from "./TodoCreationCollapse";
import TodoCreationMainMessage from "./TodoCreationMainMessage";

export default function TodoCreationForm() {
    const boxStyles = useBoxStyles();

    const handleSubmit = () => {
        console.log("Submit todo creation bubling...");
    };
    return (
        <Box className={boxStyles.boxToTop}>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} justifyContent="center">
                        <TodoCreationMainMessage />
                        <TodoCreationCollapse />
                    </Grid>
                </form>
            </Container>
        </Box>
    );
}
