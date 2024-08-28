import { createContext } from "react";

const ListContext = createContext({
 todoLists: [],
 setTodoLists: () => {}
})

export default ListContext