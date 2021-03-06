import { makeStyles } from "@mui/styles";

const useBoxStyles = makeStyles((theme) => {
    return ({
        box: {
            width: '100%',
            display: 'flex',
            flexGrow: 1,
            height: '100%',
            alignItems: 'center',
        },
        boxBasic: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
        },
        boxLogoutButton: {
            position: 'fixed',
            bottom: '5%',
            right: '5%',
            zIndex: 4,
        },
        boxToTop: {
            paddingTop: '25px',
            width: '100%',
            display: 'flex',
            //flexGrow: 1,
            //height: '100%',
            //alignItems: 'center',
        }
    })
})

export default useBoxStyles