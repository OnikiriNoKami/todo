import React from "react";
import TodoCollapseButton from "./TodoCollapseButton";
import TodoCreationCollapse from "./TodoCreationCollapse";
import TodoCreationMainMessage from "./TodoCreationMainMessage";

export default function TodoCollapseGroup() {
    return (
        <>
            <TodoCreationMainMessage />
            <TodoCollapseButton/>
            <TodoCreationCollapse />
        </>
    );
}
