import React from "react";
import Collapse from "@mui/material/Collapse";
import TableCell from "@mui/material/TableCell";
import TodoDescription from "./rowCollapseComponents/TodoDescription";

export default function TodoRowCollapseCellComponent({ openStatus, item }) {
    return (
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={openStatus} unmountOnExit>
                <TodoDescription item={item}/>
            </Collapse>
        </TableCell>
    );
}
