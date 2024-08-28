import ListContext from "./ListContext";
import { useState } from "react";

const ListProvider = ({children}) => {
    const [todoLists, setTodoLists] = useState([])

let contextValues = {
    todoLists,
    setTodoLists
   }
  
   return (
   <ListContext.Provider value={{ todoLists, setTodoLists }}>
    {children}
   </ListContext.Provider>
   )
}

export default ListProvider

