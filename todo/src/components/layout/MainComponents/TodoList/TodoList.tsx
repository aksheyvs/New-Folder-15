import { useTodoListSectionContext } from "../../../../context/TodoListSectionContext";
import { useState } from "react";

function TodoList() {
    const { todos } = useTodoListSectionContext();
    const [checkedValue, setCheckedValue] = useState(Boolean);
    const todoLists = todos.map((todo) => {
        const checkbox = <input type="checkbox" checked={checkedValue} onChange={(e) => {}}></input>;
        const todoLi = (
            <li key={todo.key}>
                {checkbox}
                {todo.name}
            </li>
        );

        return todoLi;
    });

    console.log(todos);

    return <ul className="todo-list">{<ul>{todoLists}</ul>}</ul>;
}

export default TodoList;
