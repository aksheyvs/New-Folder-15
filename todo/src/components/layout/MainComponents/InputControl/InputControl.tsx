import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodoListSectionContext } from "../../../../context/TodoListSectionContext";

export type Todo = { key: string; name: string; completed: boolean };

function InputControl() {
    const [inputValue, setInputValue] = useState("");
    const { todoArray, setItem } = useTodoListSectionContext();

    const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            todoArray.push({ key: uuidv4(), name: inputValue, completed: false });
            setItem(todoArray);
            setInputValue("");
        }

        // console.log(getItem());
        // console.log(todoArray);
    };

    return (
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
    );
}

export default InputControl;
