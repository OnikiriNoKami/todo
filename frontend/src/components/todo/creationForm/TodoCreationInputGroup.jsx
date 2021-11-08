import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import useValidatedInput from '../../../hooks/useValidatedInput';
import TodoCreationInputMonitor from './TodoCreationInputMonitor';
import { useCreateTodo } from '../../../hooks/GraphQL/mutations/todoMutations';
import todoCreationRequestActions from '../../../store/todo/totoCreation/todoCreationRequests/todoCreationRequestActionCreators';
import { paginationTodoChangeRequest } from '../../../store/pagination/paginationTodoActions';

export default function TodoCreationInputGroup() {
    const dispatch = useDispatch();
    const title = useValidatedInput('', { minLength: 5, maxLength: 300, isDefault: true})
    const description = useValidatedInput('', {maxLength: 1000, isDefault: true})
    const todoCreateMutation = useCreateTodo();
    const createRequest = useSelector(state => state.todo.todoCreation.requests.createRequest);
    const userId = useSelector(state => state.user.id)
    const dateData = useSelector(state => state.todo.todoCreation.date);

    const handleCreate = async()=>{
        try{
            await todoCreateMutation.createTodoMutation({
                variables:{
                    title: title.basic.value,
                    userId,
                    description: description.basic.value,
                    beginDate: dateData.beginDate,
                    endDate: dateData.endDate,
                }
            })
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        if(createRequest){
            handleCreate();
            dispatch(todoCreationRequestActions.setCreateRequest(false));
            dispatch(todoCreationRequestActions.setResetRequest(true));
        }
    },[createRequest, dispatch])

    useEffect(()=>{
        if(todoCreateMutation.result.data){
            dispatch(paginationTodoChangeRequest(true))
        }

    }, [todoCreateMutation.result.data])

    return (
        <Grid item xs={12} sm={10} md={8}>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item xs={12}>
                    <TextField
                        {...title.basic}
                        error={title.errorStatus}
                        variant='standard'
                        label='Title'
                        helperText="At least 5 characters."
                        required
                        fullWidth
                     />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        {...description.basic}
                        error={description.errorStatus}
                        label='Description'
                        multiline
                        rows={3}
                        fullWidth
                     />
                </Grid>
            </Grid>
            <TodoCreationInputMonitor title={title} description={description} />
        </Grid>
    )
}
