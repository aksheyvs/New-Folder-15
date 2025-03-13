import { useTodoListSectionContext } from "../../../../../context/TodoListSectionContext";
import { usePageContext } from "../../../../../context/PageContext";

function TodosCount() {
    const { page } = usePageContext();
    const { todos } = useTodoListSectionContext();

    const todosAllCount = todos.length;
    const todosActiveCount = todos.filter((todo) => todo.completed === false).length;
    const todosCompletedCount = todos.filter((todo) => todo.completed === true).length;

    const todosCount = () => {
        if (page === "active") return todosActiveCount;
        if (page === "completed") return todosCompletedCount;
        return todosAllCount;
    };

    return <div className="todos-count">{`${todosCount()} items left`}</div>;
}

export default TodosCount;
