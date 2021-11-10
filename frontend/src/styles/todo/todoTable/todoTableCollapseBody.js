import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const useTodoTableCollapsestyles = makeStyles(() => {
    const theme = createTheme();
    return {
        headLabel: {
            paddingLeft: 40,
            paddingTop: 10,
            [theme.breakpoints.only("xs")]: {
                paddingLeft: 10,
                paddingTop: 0,
                paddingBottom: 0,
            },
        },
        headItem:{
            paddingTop: 15,
            [theme.breakpoints.only("xs")]: {
                paddingLeft: 10,
                paddingTop: 0,
                paddingBottom: 0,
            },
        },
        itemLabel:{
            paddingLeft: 40,
            [theme.breakpoints.only("xs")]: {
                paddingLeft: 10,
                paddingTop: 0,
                paddingBottom: 0,
            },
        },
        item: {
            paddingTop: 5,
            [theme.breakpoints.only("xs")]: {
                paddingTop: 0,
                paddingLeft: 10,
                paddingBottom: 5,
            }
        },

    };
});

export default useTodoTableCollapsestyles;
