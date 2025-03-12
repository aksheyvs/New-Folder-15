import Header from "./components/layout/Header/Header.tsx";
import MainComponents from "./components/layout/MainComponents/MainComponents.tsx";
import useLocalStorage from "./hooks/useLocalStorage.tsx";
import { TodoListSectionContext } from "./context/TodoListSectionContext";
import { Todo } from "./components/layout/MainComponents/InputControl/InputControl.tsx";
import { useState } from "react";
import { PageContext } from "./context/PageContext.tsx";
import { ThemeContext } from "./context/ThemContext.tsx";

function App() {
    const [todos, setTodo] = useLocalStorage<Todo[]>("todoArray", []);
    const [theme, setTheme] = useLocalStorage<string>("theme", "wrapper light");
    const [page, setPage] = useState("all");
    const active = todos.filter((todo) => todo.completed === false);
    const completed = todos.filter((todo) => todo.completed === true);

    const updateTodo = (key: string) => {
        setTodo((todos) =>
            todos.map((todo) => {
                if (todo.key === key) return { ...todo, completed: !todo.completed };
                return todo;
            })
        );
    };

    const clearCompleted = () => {
        setTodo((todos) =>
            todos.filter((todo) => {
                return todo.completed === false;
            })
        );
    };

    return (
        <div id="app-root">
            <div className={theme}>
                <div className="container">
                    <ThemeContext.Provider value={{ setTheme }}>
                        <Header />
                    </ThemeContext.Provider>

                    <TodoListSectionContext.Provider
                        value={{ todos, setTodo, updateTodo, active, completed, clearCompleted }}
                    >
                        <PageContext.Provider value={{ page, setPage }}>
                            <MainComponents />
                        </PageContext.Provider>
                    </TodoListSectionContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default App;
