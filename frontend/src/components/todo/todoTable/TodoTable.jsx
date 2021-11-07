import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLazyQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TodoTableHead from "./TodoTableHead";
import Paper from "@mui/material/Paper";
import useBoxStyles from "../../../styles/boxStyles";
import todosActions from "../../../store/todo/manyTodosActionCreators";
import { getTodosByUserId } from "../../../GraphQL/queries/todoQueries";
import TodoTableRow from "./TodoTableRow";

export default function TodoTable() {
    const boxStyles = useBoxStyles();
    const dispatch = useDispatch();
    const [fetchTodos, { error, loading, data }] =
        useLazyQuery(getTodosByUserId);
    const userId = useSelector((state) => state.user.id);
    const todos = useSelector((state) => state.todo.manyTodos.todos);
    useEffect(() => {
        fetchTodos({
            variables: {
                userId,
            },
        });
    }, []);

    useEffect(() => {
        if (data) {
            dispatch(todosActions.setTodos(data.getTodosByUserId));
        }
    }, [data]);

    return (
        <Box className={boxStyles.boxToTop}>
            <Container>
                <Grid container spacinf={2} justifyContent="center">
                    <Grid item xs={12} ms={10} md={8}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TodoTableHead />
                                <TableBody>
                                    {todos.map((todo) => (
                                        <TodoTableRow key={todo._id} todo={todo}/>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
