import React from "react";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function TodoCollapseButtonCell({ onClick, openStatus }) {
    return (
        <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={onClick}>
                {openStatus ? (
                    <KeyboardArrowUpIcon />
                ) : (
                    <KeyboardArrowDownIcon />
                )}
            </IconButton>
        </TableCell>
    );
}
