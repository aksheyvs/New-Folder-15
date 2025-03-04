import TodosCount from "./TodosCount/TodosCount";
import FilterGroupBtn from "./FilterGroupBtn/FilterGroupBtn";
import ClearCompleted from "./ClearCompleted/ClearCompleted";

function TodoFilterControl() {
    return (
        <div className="todo-filter-control">
            <TodosCount />
            <FilterGroupBtn />
            <ClearCompleted />
        </div>
    );
}

export default TodoFilterControl;
