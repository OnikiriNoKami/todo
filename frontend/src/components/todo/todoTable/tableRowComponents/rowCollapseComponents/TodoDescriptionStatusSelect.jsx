import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import todosActions from "../../../../../store/todo/manyTodosActionCreators";
import {setTodoStatusIdMut} from '../../../../../GraphQL/mutations/todoMutations';

export default function TodoDescriptionStatusSelect({item}) {
    const dispatch = useDispatch();
    const [setTodosNewStatusId, {data, loading}] = useMutation(setTodoStatusIdMut);
    const statuses = useSelector((state) => state.status.manyStatuses.statuses);
    const unknownId = statuses.find(element => element.title === 'Unknown.');
    const [value, setValue] = useState(item.statusId||unknownId._id);
    const handleChange = (event) => {
        setValue(event.target.value)
        setTodosNewStatusId({
            variables: {
                todoId: item._id,
                statusId: event.target.value,
            }
        })
    }
    useEffect(()=>{
        if(data){
            dispatch(todosActions.setNewStatusId({todoId: item._id, statusId: data.setStatusId.statusId}));
        }
    }, [data])
    return (
        <Box sx={{ minWidth: 120, maxWidth: 200,paddingBottom:"10px" }}>
            <FormControl fullWidth>
                <InputLabel >Status</InputLabel>
                <Select
                    variant='standard'
                    label="Status"
                    value={value}
                    onChange={handleChange}
                >
                    {statuses.map((element) => (
                        <MenuItem value={element._id} key={element._id}>{element.title}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
