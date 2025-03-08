import Header from "./components/layout/Header/Header.tsx";
import MainComponents from "./components/layout/MainComponents/MainComponents.tsx";
import useLocalStorage from "./hooks/useLocalStorage.tsx";
import { TodoListSectionContext } from "./context/TodoListSectionContext";
import { Todo } from "./components/layout/MainComponents/InputControl/InputControl.tsx";

function App() {
    const [todos, setTodo] = useLocalStorage<Todo[]>("todoArray", []);

    return (
        <div id="root">
            <div className="wrapper light">
                <div className="container">
                    <Header />
                    <TodoListSectionContext.Provider value={{ todos, setTodo }}>
                        <MainComponents />
                    </TodoListSectionContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default App;
