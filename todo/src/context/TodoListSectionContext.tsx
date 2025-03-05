import { createContext, useContext } from "react";
import { Todo } from "../components/layout/MainComponents/InputControl/InputControl";

export const TodoListSectionContext = createContext<Todo | undefined>(undefined);

export function useTodoListSectionContext() {
    const todoArray = useContext(TodoListSectionContext);

    if (todoArray === undefined) {
        throw new Error("useTodoListSectionContext must be used within a TodoListSectionContext");
    }

    return todoArray;
}
