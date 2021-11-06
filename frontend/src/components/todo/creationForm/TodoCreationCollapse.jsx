import React from "react";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import TodoCreationInputGroup from "./TodoCreationInputGroup";
import TodoCreationButtonGroup from "./TodoCreationButtonGroup";
import { useSelector } from "react-redux";
import TodoCreationDateGroup from "./TodoCreationDateGroup";

export default function TodoCreationCollapse() {
    const isOpen = useSelector(state => state.todo.todoCreation.collapse.isOpen)
    return (
        <Grid item xs={12}>
            <Collapse in={isOpen}>
                <Grid container spacing={2} justifyContent='center'>
                    <TodoCreationInputGroup/>
                    <TodoCreationDateGroup/>
                    <TodoCreationButtonGroup />
                </Grid>
            </Collapse>
        </Grid>
    );
}
