import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useButtonStyles from "../../../styles/buttonStyles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch } from "react-redux";
import { toggleTodoCreationCollapse } from "../../../store/todo/totoCreation/todoCreationCollapseActionCreatiors";

export default function TodoCollapseButton() {
    const buttonStyles = useButtonStyles();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleTodoCreationCollapse())
    }

    return (
        <Grid item xs={12} sm={5} md={4}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12}>
                    <Button
                        endIcon={<ArrowDropDownIcon />}
                        className={buttonStyles.fullWidth}
                        onClick={handleClick}
                    >
                        open creation menu
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}
