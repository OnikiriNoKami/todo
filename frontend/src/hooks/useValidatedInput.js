import { useState, useEffect } from "react";
import useControlledInput from "./useControlledInput";

const useValidatedInput = (defaultValue = "", validations) => {
    const input = useControlledInput(defaultValue);
    const [isEmptyError, setIsEmptyError] = useState(false);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [errorStatus, setErrorStatus] = useState(false);
    const [isDefault, setIsDefault] = useState(true);
    const [isValidInput, setIsValidInput ] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "isEmpty":
                    input.basic.value.length === 0
                        ? setIsEmptyError(true)
                        : setIsEmptyError(false);
                    break;
                case "minLength":
                    input.basic.value.length <= validations[validation]
                        ? setMinLengthError(true)
                        : setMinLengthError(false);
                    break;
                case "maxLength":
                    input.basic.value.length >= validations[validation]
                        ? setMaxLengthError(true)
                        : setMaxLengthError(false);
                    break;
                case "isEmail":
                    const re =
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(String(input.basic.value).toLowerCase())
                        ? setIsEmailError(false)
                        : setIsEmailError(true);
                    break;
                case "isDefault":
                    input.basic.value === defaultValue
                        ? setIsDefault(true)
                        : setIsDefault(false);
                    break;
                default:
                    
            }
        }
    }, [input.basic.value, input.focusLost, defaultValue]);

    useEffect(() => {
        if (
            (isEmptyError && input.focusLost) ||
            (isEmailError && input.focusLost) ||
            (minLengthError && input.focusLost) ||
            (maxLengthError && input.focusLost)
        ) {
            setErrorStatus(true);
            
        } else {
            setErrorStatus(false);
        }
    }, [
        isEmptyError,
        isEmailError,
        minLengthError,
        maxLengthError,
        input.focusLost,
    ]);

    useEffect(()=>{
        if(errorStatus||!input.focusLost){
            setIsValidInput(false);
        } else {
            setIsValidInput(true);
        }
    }, [errorStatus, input.focusLost])

    return {
        ...input,
        errorStatus,
        isDefault,
        isValidInput,
    };
};

export default useValidatedInput;
