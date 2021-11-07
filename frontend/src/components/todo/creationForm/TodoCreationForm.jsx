import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useBoxStyles from "../../../styles/boxStyles";
import TodoCollapseGroup from "./TodoCollapseGroup";
import { useDispatch } from "react-redux";
import todoCreationRequestActions from "../../../store/todo/totoCreation/todoCreationRequests/todoCreationRequestActionCreators";

export default function TodoCreationForm() {
    const boxStyles = useBoxStyles();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(todoCreationRequestActions.setCreateRequest(true));
        
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
