import { useTodoListSectionContext } from "../../../../context/TodoListSectionContext";

function TodoList() {
    const { getItem } = useTodoListSectionContext();

    console.log(useTodoListSectionContext());

    return <ul className="todo-list">{/* <ul>{todoLists}</ul> */}</ul>;
}

export default TodoList;
