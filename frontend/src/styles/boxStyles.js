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
        boxLogoutButton: {
            position: 'absolute',
            bottom: '5%',
            right: '5%',
            zIndex: 4,
        }
    })
})

export default useBoxStyles