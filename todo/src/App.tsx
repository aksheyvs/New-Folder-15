import Header from "./components/layout/Header/Header.tsx";
import MainComponents from "./components/layout/MainComponents/MainComponents.tsx";

function App() {
    return (
        <div id="root">
            <div className="wrapper light">
                <div className="container">
                    <Header />
                    <MainComponents />
                </div>
            </div>
        </div>
    );
}

export default App;
