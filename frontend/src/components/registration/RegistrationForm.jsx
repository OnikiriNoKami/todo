import React from "react";
import { Container, Grid, TextField, Box } from "@mui/material";
import useValidatedInput from "../../hooks/useValidatedInput";
import useBoxStyles from "../../styles/boxStyles";

export default function RegistrationForm() {
    const email = useValidatedInput("", { isEmail: true });
    const boxStyles = useBoxStyles();
    return (
        
            <Box className={boxStyles.box}>
                <Container>
                <form>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} sm={8} md={6}>
                            <TextField
                                {...email.basic}
                                error={email.errorStatus}
                                fullWidth
                                label="Email"
                            />
                        </Grid>
                    </Grid>
                </form>
                </Container>
            </Box>
        
    );
}
