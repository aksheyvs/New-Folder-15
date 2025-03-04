import { createContext } from "react";
import { Todo } from "../components/layout/MainComponents/InputControl/InputControl";

export const TodoListSectionContext = createContext<Todo | undefined>(undefined);
