import { createContext, useContext, Dispatch, SetStateAction } from "react";

type ThemeContextType = {
    setTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useThemeContext() {
    const theme = useContext(ThemeContext);

    if (theme === undefined) {
        throw new Error("useThemeContext mast be used within a ThemeContext");
    }
    return theme;
}
