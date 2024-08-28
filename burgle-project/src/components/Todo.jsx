import React, { useContext, useState } from "react";
import ListContext from "../context/ListContext";

export default function Todo() {
    const { todoLists, setTodoLists } = useContext(ListContext);
    const [newListName, setNewListName] = useState("");
    const [newItem, setNewItem] = useState("");
    const [selectedListIndex, setSelectedListIndex] = useState(null);

    // Function to add a new to-do list
    const handleAddList = () => {
        if (newListName.trim() === "") return;
        setTodoLists([...todoLists, { name: newListName, items: [] }]);
        setNewListName("");
    };

    // Function to add an item to the selected to-do list
    const handleAddItem = () => {
        if (newItem.trim() === "" || selectedListIndex === null) return;
        const updatedLists = [...todoLists];
        updatedLists[selectedListIndex].items.push(newItem);
        setTodoLists(updatedLists);
        setNewItem("");
    };

    return (
        <div className="todo-form-section">
            <div>
                <input
                    type="text"
                    placeholder="New List Name"
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)}
                />
                <button onClick={handleAddList}>Add List</button>
            </div>

            {todoLists.length > 0 && (
                <>
                    <div>
                        <select
                            onChange={(e) => setSelectedListIndex(e.target.value)}
                            value={selectedListIndex}
                        >
                            <option value={null}>Select List</option>
                            {todoLists.map((list, index) => (
                                <option key={index} value={index}>
                                    {list.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="New Item"
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                        />
                        <button onClick={handleAddItem}>Add Item</button>
                    </div>
                </>
            )}

            <div>
                {todoLists.map((list, index) => (
                    <div key={index}>
                        <h3>{list.name}</h3>
                        <ul>
                            {list.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
