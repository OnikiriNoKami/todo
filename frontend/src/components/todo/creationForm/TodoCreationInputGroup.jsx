import React from 'react';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import useValidatedInput from '../../../hooks/useValidatedInput';

export default function TodoCreationInputGroup() {
    return (
        <Grid item xs={12} sm={10} md={8}>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item xs={12}>
                    <TextField
                        value='asfasfsadf'
                        variant='standard'
                        label='Title'
                        helperText="At least 5 characters."
                        required
                        fullWidth
                     />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        value='asfasfsadf'
                        label='Description'
                        multiline
                        rows={4}
                        fullWidth
                     />
                </Grid>
            </Grid>
        </Grid>
    )
}
