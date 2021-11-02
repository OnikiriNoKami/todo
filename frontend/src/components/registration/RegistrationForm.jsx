import React from "react";
import {
    Container,
    Grid,
    Box,
} from "@mui/material";
import useBoxStyles from "../../styles/boxStyles";
import LinkToLogin from "./LinkToLogin";
import RegistrationButtonGroup from "./RegistrationButtonGroup";
import RegistrationInputGroup from "./RegistrationInputGroup";
import RegistrationMessage from "./RegistrationMessage";

export default function RegistrationForm() {
    const boxStyles = useBoxStyles();    

    return (
        <Box className={boxStyles.box}>
            <Container>
                <form autoComplete="off">
                    <Grid container spacing={3} justifyContent="center">
                        <RegistrationMessage/>
                        <RegistrationInputGroup/>
                        <RegistrationButtonGroup/>
                        <LinkToLogin/>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
}
