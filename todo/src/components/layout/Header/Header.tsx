import { useThemeContext } from "../../../context/ThemContext";

function Header() {
    const { theme, setTheme } = useThemeContext();

    const toggleTheme = () => {
        setTheme((theme) => (theme === "wrapper light" ? "wrapper dark" : "wrapper light"));
    };

    return (
        <header>
            <h1>TODO</h1>
            <button className="btn switch-theme-btn" onClick={toggleTheme}>
                <img src={theme === "wrapper light" ? "/moon-4-32.png" : "sun-2-24.png"} />
            </button>
        </header>
    );
}

export default Header;
