import { useState } from 'react';

const useControlledInput = (defaultValue='') => {
    const [value, setValue] = useState(defaultValue);
    const [focusReceived, setFocusReceived] = useState(false);
    const [focusLost, setFocusLost] = useState(false);

    const onChange = (event) => {
        if(value!==event.target.value){
            setValue(event.target.value);
        }
    }

    const onFocus = ()=>{
        if(!focusReceived){
            setFocusReceived(true);
        }
    }

    const onBlur = () => {
        if(!focusLost){
            setFocusLost(true);
        }
    }

    const setDefault = () => {
        if(value !== defaultValue){
            setValue(defaultValue)
        }
    }

    const resetInput = () => {
        setDefault();
        if(focusReceived){
            setFocusReceived(false);
        }
        if(focusLost){
            setFocusLost(false);
        }
    }

    return {
        basic: {
            value,
            onBlur,
            onFocus,
            onChange,
        },
        focusLost,
        focusReceived,
        setDefault,
        resetInput,
    }
}

export default useControlledInput