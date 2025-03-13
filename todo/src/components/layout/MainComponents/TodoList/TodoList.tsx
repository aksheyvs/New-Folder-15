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
            <div className={"checkbox-border-wrap"}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => {
                        updateTodo(todo.key);
                    }}
                    className={"checkbox"}
                    id={todo.key}
                ></input>
            </div>
        );

        const todoTask = <p className={todo.completed ? "completed" : ""}>{todo.name}</p>;
        const todoLi = (
            <li key={todo.key}>
                {checkbox}
                {todoTask}
            </li>
        );

        return todoLi;
    });

    const defaultTodo = <li>There's no task</li>;

    return <ul className="todo-list">{todoLists.length === 0 ? defaultTodo : todoLists}</ul>;
}

export default TodoList;
