import React from "react";
import { useDispatch }from 'react-redux';
import {
    Container,
    Grid,
    Box,
} from "@mui/material";
import useBoxStyles from "../../styles/boxStyles";
import LinkToRegistration from "./LinkToRegistration";
import LoginButtonGroup from "./LoginButtonGroup";
import LoginInputGroup from "./LoginInputGrop";
import LoginMessage from "./LoginMessage";
//import { regCreateUserRequest } from "../../store/registration/registrationActionCreators";

export default function LoginForm() {
    const dispatch = useDispatch();
    const boxStyles = useBoxStyles(); 
    const handleSubmit = (event) => {
        event.preventDefault();
        //dispatch(regCreateUserRequest(true))
    }   

    return (
        <Box className={boxStyles.box}>
            <Container>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container spacing={3} justifyContent="center">
                        <LoginMessage/>
                        <LoginInputGroup/>
                        <LoginButtonGroup/>
                        <LinkToRegistration/>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
}