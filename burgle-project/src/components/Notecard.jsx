import { useState, useContext } from "react";
import '../index.css';
import ListContext from "../context/ListContext";
import Todo from "./Todo";

function Notecard({ message, visible }) {
 const { todoLists } = useContext(ListContext);

 return (
     <div className="notecard" style={{ visibility: visible }}>
         <h1>{message}</h1>
         {todoLists.map((list, listIndex) => (
             <div key={listIndex} className="todo-list">
                 <h2>Todo List {listIndex + 1}</h2>
                 <ul>
                     {list.map((item, itemIndex) => (
                         <li key={itemIndex}>{item}</li>
                     ))}
                 </ul>
             </div>
         ))}
     </div>
 );
}

export default Notecard;
