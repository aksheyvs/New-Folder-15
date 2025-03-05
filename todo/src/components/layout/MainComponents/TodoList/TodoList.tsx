import { useTodoListSectionContext } from "../../../../context/TodoListSectionContext";

function TodoList() {
    let todoArray = useTodoListSectionContext();

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
