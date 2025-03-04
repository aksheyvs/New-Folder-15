import InputControl from "./InputControl/InputControl";
import TodoList from "./TodoList/TodoList";
import TodoFilterControl from "./TodoFilterControl/TodoFilterControl";

function MainComponents() {
    return (
        <main>
            <div className="input-control">
                <InputControl />
            </div>
            <section className="todo-list-section">
                <TodoList />
                <TodoFilterControl />
            </section>
        </main>
    );
}

export default MainComponents;
