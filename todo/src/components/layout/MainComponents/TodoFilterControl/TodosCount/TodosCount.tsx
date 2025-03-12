import { useTodoListSectionContext } from "../../../../../context/TodoListSectionContext";

function TodosCount() {
    const { todos } = useTodoListSectionContext();

    const todosCount = todos.length;
    return <div className="todos-count">{todosCount} items left</div>;
}

export default TodosCount;
