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
import { getTodoByUserIdPaginated } from "../../../GraphQL/queries/todoQueries";
import TodoTableRow from "./TodoTableRow";
import PaginationComponent from "./tablePaginationComponents/PaginationComponent";
import paginationTodoActions from "../../../store/pagination/paginationTodoActions";

export default function TodoTable() {
    const boxStyles = useBoxStyles();
    const dispatch = useDispatch();
    const [fetchTodos, { error, loading, data, refetch }] = useLazyQuery(
        getTodoByUserIdPaginated
    );
    const userId = useSelector((state) => state.user.id);
    const todos = useSelector((state) => state.todo.manyTodos.todos);
    const limit = useSelector((state) => state.pagination.todoPagination.limit);
    const paginationRequest = useSelector(state => state.pagination.todoPagination.changeRequest);
    const page = useSelector(
        (state) => state.pagination.todoPagination.currentPage
    );

    useEffect(() => {
        fetchTodos({
            variables: {
                userId,
                limit,
                page,
            },
        });
    }, []);

    useEffect(() => {
        if (data) {
            dispatch(paginationTodoActions.setPaginationDataTogether({
                hasPrev: data.getTodosByUserId.pagination.hasPrev,
                hasNext: data.getTodosByUserId.pagination.hasNext,
                totalCount: data.getTodosByUserId.pagination.totalCount,                
            }))
            dispatch(todosActions.setTodos(data.getTodosByUserId.todos));
        }
    }, [data]);

    useEffect(()=>{
        if(paginationRequest){
            refetch({
                userId,
                limit,
                page,
            })
            dispatch(paginationTodoActions.setChangeRequest(false));
            
        }

    }, [paginationRequest])

    return (
        <Box className={boxStyles.boxToTop}>
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
