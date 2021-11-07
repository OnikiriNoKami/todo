import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
export default function TodoTableHead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell/>
                <TableCell>Title</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">statusId</TableCell>
                <TableCell align="right">beginDate</TableCell>
                <TableCell align="right">endDate</TableCell>
            </TableRow>
        </TableHead>
    );
}
