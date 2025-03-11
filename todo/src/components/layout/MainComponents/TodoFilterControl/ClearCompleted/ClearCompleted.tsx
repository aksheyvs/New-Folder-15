import { useTodoListSectionContext } from "../../../../../context/TodoListSectionContext";
import { usePageContext } from "../../../../../context/PageContext";
function ClearCompleted() {
    const { clearCompleted } = useTodoListSectionContext();
    const { setPage } = usePageContext();

    const clearCompletedTodo = () => {
        clearCompleted();
        setPage("all");
    };

    return (
        <div className="control-btn">
            <button className="btn" onClick={clearCompletedTodo}>
                Clear Completed
            </button>
        </div>
    );
}

export default ClearCompleted;
