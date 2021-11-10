import { makeStyles } from "@mui/styles";
const todoTableRowDataStyles = makeStyles(()=>{
    return {
        smallWidth: {
            maxWidth: 100,
        },
        midWidth: {
            maxWidth: 140,
        },
        bigWidth: {
            maxWidth: 170,
        },
    }
})
export default todoTableRowDataStyles;