import { useTodoListSectionContext } from "../../../../context/TodoListSectionContext";
import { usePageContext } from "../../../../context/PageContext";

function TodoList() {
    const { todos, updateTodo, active, completed } = useTodoListSectionContext();
    const { page } = usePageContext();

    const getCurrentTodos = () => {
        if (page === "active") {
            return active;
        }

        if (page === "completed") {
            return completed;
        }

        return todos;
    };

    const currentTodos = getCurrentTodos();

    const todoLists = currentTodos.map((todo) => {
        const checkbox = (
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                    updateTodo(todo.key);
                }}
            ></input>
        );

        const todoTask = (
            <p style={todo.completed ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{todo.name}</p>
        );
        const todoLi = (
            <li key={todo.key}>
                {checkbox}
                {todoTask}
            </li>
        );

        return todoLi;
    });

    return <ul className="todo-list">{<ul>{todoLists}</ul>}</ul>;
}

export default TodoList;
