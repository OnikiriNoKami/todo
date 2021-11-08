import React from "react";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";

export default function TodoRowDataComponent({ item }) {
    return (
        <>
            <TableCell><Typography>{item.title}</Typography></TableCell>
            {/* <TableCell align="right">{item.description}</TableCell> */}
            <TableCell align="right">{item.statusId}</TableCell>
            <TableCell align="right">
                {format(new Date(parseInt(item.beginDate, 10)), "dd/MM/yyyy")}
            </TableCell>
            <TableCell align="right">
                {format(new Date(parseInt(item.endDate, 10)), "dd/MM/yyyy")}
            </TableCell>
        </>
    );
}
