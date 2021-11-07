import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useButtonStyles from "../../../styles/buttonStyles";
import todoCreationRequestActions from '../../../store/todo/totoCreation/todoCreationRequests/todoCreationRequestActionCreators';

export default function TodoCreationButtonGroup() {
    const dispatch = useDispatch();
    const title = useSelector(state=>state.todo.todoCreation.inputs.title);
    const description = useSelector(state=>state.todo.todoCreation.inputs.description);

    const handleInputsReset = () => {
        dispatch(todoCreationRequestActions.setResetRequest(true));
    }

    const buttonStyles = useButtonStyles()
    return (
        <Grid item xs={12}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={10} md={8}>
                    <Grid container spacing={2} justifyContent="space-between">
                        <Grid style={{ paddingTop: 10 }} item xs={12} sm={6}>
                            <Button
                                className={buttonStyles.fullWidth}
                                variant="outlined"
                                color="primary"
                                type='submit'
                                disabled={!title.valid || !(description.valid || description.isDefault)}
                            >
                                create
                            </Button>
                        </Grid>
                        <Grid style={{ paddingTop: 10 }} item xs={12} sm={6}>
                            <Button
                                className={buttonStyles.fullWidth}
                                variant="outlined"
                                color="secondary"
                                onClick={handleInputsReset}
                                disabled={!title.dirty && (!description.dirty || description.isDefault)}
                            >
                                reset
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
