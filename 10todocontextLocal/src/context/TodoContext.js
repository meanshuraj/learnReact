import {createContext,useContext} from  "react"

export const TodoContext=createContext({
    todo:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],
    addTodo:()=>{},
    updatedTodo:(id,todo)=>{},
    deletedTodo:(id) =>{},
    toggleComplete:(id)=>{}
});

export const TodoProvider=TodoContext.Provider;

export const useTodo=()=>{
    return useContext(TodoContext);
}