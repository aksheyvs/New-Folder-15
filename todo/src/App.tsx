import Header from "./components/layout/Header/Header.tsx";
import MainComponents from "./components/layout/MainComponents/MainComponents.tsx";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useState } from "react";
import { TodoListSectionContext } from "./context/TodoListSectionContext";

function App() {
    const { setItem, getItem } = useLocalStorage("todoArray");
    const [todoArray, setTodoArray] = useState(getItem());

    setTodoArray(setItem);

    return (
        <div id="root">
            <div className="wrapper light">
                <div className="container">
                    <Header />
                    <TodoListSectionContext.Provider value={{ todoArray, setTodoArray }}>
                        <MainComponents />
                    </TodoListSectionContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default App;
