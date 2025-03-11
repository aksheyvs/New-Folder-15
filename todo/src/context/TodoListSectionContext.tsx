import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Todo } from "../components/layout/MainComponents/InputControl/InputControl";

type TodoContextType = {
    todos: Todo[];
    setTodo: Dispatch<SetStateAction<Todo[]>>;
    updateTodo: (key: string) => void;
    active: Todo[];
    completed: Todo[];
    clearCompleted: () => void;
};

export const TodoListSectionContext = createContext<TodoContextType | undefined>(undefined);

export function useTodoListSectionContext() {
    const todoArray = useContext(TodoListSectionContext);

    if (todoArray === undefined) {
        throw new Error("useTodoListSectionContext must be used within a TodoListSectionContext");
    }

    return todoArray;
}
