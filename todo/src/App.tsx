import Header from "./components/layout/Header/Header.tsx";
import MainComponents from "./components/layout/MainComponents/MainComponents.tsx";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useState } from "react";
import { Todo } from "./components/layout/MainComponents/InputControl/InputControl.tsx";
import { TodoListSectionContext } from "./context/TodoListSectionContext";

function App() {
    const { setItem, getItem } = useLocalStorage("todoArray");
    const [todoArray, setTodoArray] = useState([]);

    setTodoArray(getItem());

    return (
        <div id="root">
            <div className="wrapper light">
                <div className="container">
                    <Header />
                    <TodoListSectionContext.Provider value={{ todoArray, setItem }}>
                        <MainComponents />
                    </TodoListSectionContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default App;
