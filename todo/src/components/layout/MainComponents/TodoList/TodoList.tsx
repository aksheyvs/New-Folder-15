import { useLocalStorage } from "../../../../hooks/useLocalStorage";

function TodoList() {
    const { getItem } = useLocalStorage("todoArray");

    console.log(getItem());

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
