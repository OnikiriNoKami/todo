import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TodoTableHead from "./TodoTableHead";
import Paper from "@mui/material/Paper";
import useBoxStyles from "../../../styles/boxStyles";
import TodoTableRow from "./TodoTableRow";
import PaginationComponent from "./tablePaginationComponents/PaginationComponent";
import TodosLoader from "./TodosLoader";

export default function TodoTable() {
    const boxStyles = useBoxStyles();
    const todos = useSelector((state) => state.todo.manyTodos.todos);

    return (
        <Box className={boxStyles.boxToTop}>
            <TodosLoader />
            <Container>
                <Grid container spacinf={2} justifyContent="center">
                    <Grid item xs={12} sm={10} md={8}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TodoTableHead />
                                <TableBody>
                                    {todos.map((todo) => (
                                        <TodoTableRow
                                            key={todo._id}
                                            todo={todo}
                                        />
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} sm={10} md={8}>
                        <PaginationComponent />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
