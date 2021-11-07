import React from 'react';
import TodoCreationForm from '../components/todo/creationForm/TodoCreationForm';
import TodoTable from '../components/todo/todoTable/TodoTable';

export default function TodosPage() {
    return (
        <>
            <TodoCreationForm/>
            <TodoTable />
        </>
    )
}
