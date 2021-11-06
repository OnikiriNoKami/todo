import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetDateData } from "../../../store/todo/totoCreation/todoCreationDate/todoCreationDateActionCreators";
import {
    todoCreationSetTitleValid,
    todoCreationSetDescriptionValid,
    todoCreationSetDescriptionDirty,
    todoCreationSetTitleDirty,
    todoCreationSetDescriptionIsDefault,
} from "../../../store/todo/totoCreation/todoCreationInputs/todoCreationInputsActionCreators";

export default function TodoCreationInputMonitor({ title, description }) {
    const dispatch = useDispatch();

    const resetRequest = useSelector(
        (state) => state.todo.todoCreation.requests.resetRequest
    );

    const handleReset = () => {
        title.resetInput();
        description.resetInput();
        try {
            dispatch(resetDateData(true));
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (title.isValidInput) {
            dispatch(todoCreationSetTitleValid(true));
        } else {
            dispatch(todoCreationSetTitleValid(false));
        }
    }, [title.isValidInput, dispatch]);

    useEffect(() => {
        if (description.isValidInput) {
            dispatch(todoCreationSetDescriptionValid(true));
        } else {
            dispatch(todoCreationSetDescriptionValid(false));
        }
    }, [description.isValidInput, dispatch]);

    useEffect(() => {
        if (title.focusLost) {
            dispatch(todoCreationSetTitleDirty(true));
        } else {
            dispatch(todoCreationSetTitleDirty(false));
        }
    }, [title.focusLost, dispatch]);

    useEffect(() => {
        if (description.focusLost) {
            dispatch(todoCreationSetDescriptionDirty(true));
        } else {
            dispatch(todoCreationSetDescriptionDirty(false));
        }
    }, [description.focusLost, dispatch]);

    useEffect(() => {
        if (description.isDefault) {
            dispatch(todoCreationSetDescriptionIsDefault(true));
        } else {
            dispatch(todoCreationSetDescriptionIsDefault(false));
        }
    }, [description.isDefault, dispatch]);

    return null;
}
