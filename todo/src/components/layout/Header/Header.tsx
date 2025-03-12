import { useThemeContext } from "../../../context/ThemContext";

function Header() {
    const { setTheme } = useThemeContext();

    const toggleTheme = () => {
        setTheme((theme) => (theme === "wrapper light" ? "wrapper dark" : "wrapper light"));
    };
    return (
        <header>
            <h1>TODO</h1>
            <button className="btn switch-theme-btn" onClick={toggleTheme}>
                Dark
            </button>
        </header>
    );
}

export default Header;
