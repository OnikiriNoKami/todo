import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useBoxStyles from "../../../styles/boxStyles";

import TodoCollapseGroup from "./TodoCollapseGroup";


export default function TodoCreationForm() {
    const boxStyles = useBoxStyles();

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Submit todo creation bubling...");
    };
    return (
        <Box className={boxStyles.boxToTop}>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} justifyContent="center">
                        <TodoCollapseGroup />
                    </Grid>
                </form>
            </Container>
        </Box>
    );
}
