import { createContext } from "react";
import { useReducer } from "react";

const initialState = {todoList:[], dispatch:null};
export const todoListContext = createContext(initialState);
const todoListReducer = (state, actions)=>{
    if(actions.type == 'ADD'){
        let newState = [...state];
        newState.push(actions.todo);
        return newState;
    }
    else if(actions.type == 'REMOVE'){
        let newState = state.filter((item)=>item.id !== actions.id) 
        return newState;
    }
    return state;
}
const TodoListContext = (props)=>{
    const [list, dispatch] = useReducer(todoListReducer,initialState.todoList);
    return <todoListContext.Provider value={{todoList:list, dispatch:dispatch}}> {props.children}</todoListContext.Provider>   
}

export default TodoListContext;