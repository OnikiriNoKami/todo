import React from "react";
import { useSelector } from "react-redux";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import todoTableRowDataStyles from "../../../../styles/todo/todoTable/todoTableRowData";

export default function TodoRowDataComponent({ item }) {
    const styles = todoTableRowDataStyles();
    const statuses = useSelector((state) => state.status.manyStatuses.statuses);
    const index = statuses.findIndex((element) => {
        return element._id === item.statusId
    });
    return (
        <>
            <TableCell>
                <Typography className={styles.midWidth} noWrap>
                    {item.title}
                </Typography>
            </TableCell>
            <TableCell align="right">{index !== -1 ? statuses[index].title : "Unknown."}</TableCell>
            <TableCell align="right">
                {format(new Date(parseInt(item.beginDate, 10)), "dd/MM/yyyy")}
            </TableCell>
            <TableCell align="right">
                {format(new Date(parseInt(item.endDate, 10)), "dd/MM/yyyy")}
            </TableCell>
        </>
    );
}
