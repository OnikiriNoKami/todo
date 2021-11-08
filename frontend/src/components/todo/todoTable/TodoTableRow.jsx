import { useState } from "react";
import TableRow from "@mui/material/TableRow";
import TodoCollapseButtonCell from "./tableRowComponents/TodoCollapseButtonCell";
import TodoRowDataComponent from "./tableRowComponents/TodoRowDataComponent";
import TodoRowCollapseCellComponent from "./tableRowComponents/TodoRowCollapseCellComponent";

export default function TodoTableRow({ todo }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <TableRow
                key={todo._id}
                sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                }}
            >
                <TodoCollapseButtonCell onClick={handleOpen} openStatus={open}/>
                <TodoRowDataComponent item={todo}/>
            </TableRow>
            <TableRow>
                <TodoRowCollapseCellComponent openStatus={open} item={todo}/>
            </TableRow>
        </>
    );
}
