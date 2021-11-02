import React from "react";
import { useDispatch }from 'react-redux';
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
import { regCreateUserRequest } from "../../store/registration/registrationActionCreators";

export default function RegistrationForm() {
    const dispatch = useDispatch();
    const boxStyles = useBoxStyles(); 
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(regCreateUserRequest(true))
    }   

    return (
        <Box className={boxStyles.box}>
            <Container>
                <form autoComplete="off" onSubmit={handleSubmit}>
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
