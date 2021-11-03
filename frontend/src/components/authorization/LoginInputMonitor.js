import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    logSetPasswordDirty,
    logSetPasswordValid,
    logSetNickNameValid,
    logSetNickNameDirty,
    logResetInputs,
} from "../../store/login/loginActionCreators";

export default function LoginInputMonitor({password, nickName}) {
    const dispatch = useDispatch();

    const resetRequest = useSelector(
        (state) => state.login.resetRequest
    );

    const resetInputs = () => {
        password.resetInput();
        nickName.resetInput();
        dispatch(logResetInputs(false));
    };

    useEffect(() => {
        if (password.isValidInput) {
            dispatch(logSetPasswordValid(true));
        } else {
            dispatch(logSetPasswordValid(false));
        }
    }, [password.isValidInput, dispatch]);

    useEffect(() => {
        if (nickName.isValidInput) {
            dispatch(logSetNickNameValid(true));
        } else {
            dispatch(logSetNickNameValid(false));
        }
    }, [nickName.isValidInput, dispatch]);

    useEffect(() => {
        if (password.focusLost) {
            dispatch(logSetPasswordDirty(true));
        } else {
            dispatch(logSetPasswordDirty(false));
        }
    }, [password.focusLost, dispatch]);

    useEffect(() => {
        if (nickName.focusLost) {
            dispatch(logSetNickNameDirty(true));
        } else {
            dispatch(logSetNickNameDirty(false));
        }
    }, [nickName.focusLost, dispatch]);

    useEffect(() => {
        if (resetRequest) {
            resetInputs();
        }
    }, [resetRequest]);

    return null
}