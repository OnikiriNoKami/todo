import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { addDayToEndDate, setEndDate, setBeginDate } from "../../../store/todo/totoCreation/todoCreationDate/todoCreationDateActionCreators";

export default function TodoCreationDateGroup() {
    const dispatch = useDispatch();
    const beginDate = useSelector(state=>state.todo.todoCreation.date.beginDate);
    const endDate = useSelector(state=>state.todo.todoCreation.date.endDate);
    React.useEffect(()=>{
        dispatch(addDayToEndDate(1));
    }, [])

    const handleBeginChange = (newValue) => {
        dispatch(setBeginDate(newValue))
    }

    const handleEndChange = (newValue) => {
        dispatch(setEndDate(newValue))
    }


    return (
        <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={10} md={8}>
                    <Grid container spacing={2} justifyContent="space-between">
                        <Grid style={{ paddingTop: 10 }} item xs={12} sm={6}>
                        <MobileDatePicker
                        label="Begin date"
                        inputFormat="dd/MM/yyyy"
                        value={beginDate}
                        minDate={Date.now()}
                        maxDate={endDate}
                        onChange={handleBeginChange}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                    />
                        </Grid>
                        <Grid style={{ paddingTop: 10 }} item xs={12} sm={6}>
                        <MobileDatePicker
                        label="End date"
                        inputFormat="dd/MM/yyyy"
                        value={endDate}
                        minDate={beginDate}
                        onChange={handleEndChange}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                    />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </LocalizationProvider>
        </Grid>
    );
}
