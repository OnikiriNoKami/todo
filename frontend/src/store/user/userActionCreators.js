import userActionsTypes from "../../utils/reduxActionType/userActionsTypes";

// email: "",
//     phone: "",
//     nickName: "",
//     todos: [],
//     token: "",

// SET_USER_DATA: 'set_user_data',
//     SET_USER_EMAIL: 'set_user_email',
//     SET_USER_NICKNAME: 'set_user_nickName',
//     SET_USER_PHONE: 'set_user_phone',
//     SET_USER_TODOS: 'set_user_todos',
//     SET_USER_TOKEN: 'set_user_token',
//     ADD_USER_TODO: 'add_user_todo',
//     DROP_USER_DATA: 'drop_user_data'

const userActions = {
    setData: ({ email, phone, nickName, todos, token }) => ({
        type: userActionsTypes.SET_USER_DATA,
        payload: { email, phone, nickName, todos, token },
    }),
    setNickName: (nickName) => ({
        type: userActionsTypes.SET_USER_NICKNAME,
        payload: nickName,
    }),
    setPhone: (phone) => ({
        type: userActionsTypes.SET_USER_PHONE,
        payload: phone
    }),
    setEmail: (email) => ({
        type: userActionsTypes.SET_USER_EMAIL,
        payload: email
    }),
    setTodos: (todos) => ({
        type: userActionsTypes.SET_USER_TODOS,
        payload: todos
    }),
    setToken: (token) => ({
        type: userActionsTypes.SET_USER_TOKEN,
        payload: token
    }),
    addTodo: (singleTodo) => ({
        type: userActionsTypes.ADD_USER_TODO,
        payload: singleTodo
    }),
    dropData: (confirm=false) => {
        if(confirm){
            return ({
                type: userActionsTypes.DROP_USER_DATA
            })
        } 
        throw new Error('Confirmation for user data drop not provided.')
    }
};

export default userActions;
