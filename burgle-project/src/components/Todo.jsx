import { useState } from "react";
import BurgerButtons from "./BurgerButtons";

export default function Todo() {

    //creating a use state variable in order to store the to-do item 
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    //handling the submit 
    const handleSubmit = (event) => {
        event.preventDefault();
        //now setting the to do list. spreading the todo list of previous items to make sure they're kept in the array, along with the
        //new todo item submitted. 
        setTodoList([...todoList, todo])

        //can't do this because setting a value is an async action
        // console.log(todoList)

        //emptying the task bar after adding a task
        setTodo("");
    };

    return (

        //
        <div className="todo-form-section">
            <form className="todo-task-submission" onSubmit={handleSubmit}>
                {/* taking the event (typing input) and setting the todo value to the event input  */}
                <input className="todo-input" onChange={(e) => setTodo(e.target.value)} value={todo} type="text"></input>
                <button type="submit">Add Task</button>
            </form>
            {console.log(todoList)}
        </div >
    );
}