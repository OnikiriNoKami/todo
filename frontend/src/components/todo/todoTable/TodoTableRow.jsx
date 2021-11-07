import { useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { format } from "date-fns";

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
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={handleOpen}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell>{todo.title}</TableCell>
                <TableCell align="right">{todo.description}</TableCell>
                <TableCell align="right">{todo.statusId}</TableCell>
                <TableCell align="right">
                    {format(
                        new Date(parseInt(todo.beginDate, 10)),
                        "dd/MM/yyyy"
                    )}
                </TableCell>
                <TableCell align="right">
                    {format(new Date(parseInt(todo.endDate, 10)), "dd/MM/yyyy")}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} unmountOnExit>
                    
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
