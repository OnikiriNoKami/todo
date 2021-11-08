import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
export default function TodoTableHead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell/>
                <TableCell><Typography>Title</Typography></TableCell>
                {/* <TableCell align="right">Description</TableCell> */}
                <TableCell align="right"><Typography>Status</Typography></TableCell>
                <TableCell align="right"><Typography>Begin date</Typography></TableCell>
                <TableCell align="right"><Typography>End date</Typography></TableCell>
            </TableRow>
        </TableHead>
    );
}
