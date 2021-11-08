import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useBoxStyles from "../../styles/boxStyles";
import authorizationActions from "../../store/authorization/authorizationActionCreators";
import { useDispatch, useSelector } from "react-redux";
import { dropStorageToken } from "../../storage/tokenStorage";

export default function LogoutButton() {
    const boxStyles = useBoxStyles();
    const authorized = useSelector((state) => state.authorization.authorized);
    const dispatch = useDispatch();

    const handleLogout = () => {
        if (authorized) {
            dispatch(authorizationActions.resetData(true));
            dropStorageToken();
        }
    };
    if (authorized) {
        return (
            <Box className={boxStyles.boxLogoutButton}>
                <Button color='secondary' variant='outlined' onClick={handleLogout} >logout</Button>
            </Box>
        );
    }
    return null;
}
