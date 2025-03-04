import { useState } from "react";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import { TodoListSectionContext } from "../../../../context/TodoListSectionContext";

export type Todo = { key: string; name: string; completed: boolean };

function InputControl() {
    const { setItem, getItem } = useLocalStorage("todoArray");
    const [inputValue, setInputValue] = useState("");

    const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            let todoArray = getItem();
            todoArray.push({ key: uuidv4(), name: inputValue, completed: false });
            setItem(todoArray);
            setInputValue("");
        }

        // console.log(getItem());
        // console.log(todoArray);
    };

    return (
        <TodoListSectionContext.Provider value={}>
            <input
                type="text"
                className="todo-input"
                value={inputValue}
                placeholder="Create a new todo..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInputValue(e.target.value);
                }}
                onKeyDown={addTodo}
            />
        </TodoListSectionContext.Provider>
    );
}

export default InputControl;
