import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    regSetEmailDirty,
    regSetEmailValid,
    regSetPasswordDirty,
    regSetPasswordValid,
    regSetNickNameValid,
    regSetNickNameDirty,
    regSetEmailIsDefault,
    regResetInputs,
} from "../../store/registration/registrationActionCreators";

export default function RegistrationInputMonitor({email, password, nickName}) {
    const dispatch = useDispatch();

    const resetRequest = useSelector(
        (state) => state.registration.resetRequest
    );

    const resetInputs = () => {
        email.resetInput();
        password.resetInput();
        nickName.resetInput();
        dispatch(regResetInputs(false));
    };
    
    useEffect(() => {
        if (email.isValidInput) {
            dispatch(regSetEmailValid(true));
        } else {
            dispatch(regSetEmailValid(false));
        }
    }, [email.isValidInput, dispatch]);

    useEffect(() => {
        if (password.isValidInput) {
            dispatch(regSetPasswordValid(true));
        } else {
            dispatch(regSetPasswordValid(false));
        }
    }, [password.isValidInput, dispatch]);

    useEffect(() => {
        if (nickName.isValidInput) {
            dispatch(regSetNickNameValid(true));
        } else {
            dispatch(regSetNickNameValid(false));
        }
    }, [nickName.isValidInput, dispatch]);

    useEffect(() => {
        if (email.focusLost) {
            dispatch(regSetEmailDirty(true));
        } else {
            dispatch(regSetEmailDirty(false));
        }
    }, [email.focusLost, dispatch]);

    useEffect(() => {
        if (password.focusLost) {
            dispatch(regSetPasswordDirty(true));
        } else {
            dispatch(regSetPasswordDirty(false));
        }
    }, [password.focusLost, dispatch]);

    useEffect(() => {
        if (nickName.focusLost) {
            dispatch(regSetNickNameDirty(true));
        } else {
            dispatch(regSetNickNameDirty(false));
        }
    }, [nickName.focusLost, dispatch]);

    useEffect(() => {
        if (email.isDefault) {
            dispatch(regSetEmailIsDefault(true));
        } else {
            dispatch(regSetEmailIsDefault(false));
        }
    }, [email.isDefault, dispatch]);

    useEffect(() => {
        if (resetRequest) {
            resetInputs();
        }
    }, [resetRequest]);

    // useEffect(() => {
    //     if (password.isDefault) {
    //         dispatch(regSetPasswordIsDefault(true));
    //     } else {
    //         dispatch(regSetPasswordIsDefault(false));
    //     }
    // }, [password.isDefault, dispatch]);

    // useEffect(() => {
    //     if (nickName.isDefault) {
    //         dispatch(regSetNickNameIsDefault(true));
    //     } else {
    //         dispatch(regSetNickNameIsDefault(false));
    //     }
    // }, [nickName.isDefault, dispatch]);
    return null
}
