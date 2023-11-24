import React, {createContext,useContext} from "react";
export const TodoContext = createContext({
    todos:[
        {
        id:1,
        title:"To do title",
        description:"complete description",
        status:"Not Yet Started",
        priority:"low",
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
});
//default values in context
export const useTodo=()=>{

    return useContext(TodoContext);
      

}
export const TodoProvider=TodoContext.Provider;