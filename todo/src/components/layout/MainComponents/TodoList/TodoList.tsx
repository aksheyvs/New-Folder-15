import { useContext } from "react";
import { TodoListSectionContext } from "../../../../context/TodoListSectionContext";

function TodoList() {
    let todoArray = useContext(TodoListSectionContext);

    console.log(todoArray);

    return (
        <ul className="todo-list">
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
        </ul>
    );
}

export default TodoList;
