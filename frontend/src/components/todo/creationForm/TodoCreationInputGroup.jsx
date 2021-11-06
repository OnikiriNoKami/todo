import React from 'react';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import useValidatedInput from '../../../hooks/useValidatedInput';
import TodoCreationInputMonitor from './TodoCreationInputMonitor';


export default function TodoCreationInputGroup() {
    const title = useValidatedInput('', { minLength: 5, maxLength: 300, isDefault: true})
    const description = useValidatedInput('', {maxLength: 1000, isDefault: true})

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
