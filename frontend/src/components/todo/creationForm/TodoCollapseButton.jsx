import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useButtonStyles from "../../../styles/buttonStyles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useDispatch, useSelector } from "react-redux";
import { toggleTodoCreationCollapse } from "../../../store/todo/totoCreation/todoCreationCollapseActionCreatiors";

export default function TodoCollapseButton() {
    const buttonStyles = useButtonStyles();
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.todo.todoCreation.collapse.isOpen);
    const handleClick = () => {
        dispatch(toggleTodoCreationCollapse())
    }

    return (
        <Grid item xs={12} sm={5} md={4}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12}>
                    <Button
                        endIcon={isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                        className={buttonStyles.fullWidth}
                        onClick={handleClick}
                    >
                        {isOpen? "close" : "open"} creation menu
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}
