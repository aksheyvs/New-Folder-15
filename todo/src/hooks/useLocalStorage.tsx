import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        try {
            const saved = localStorage.getItem(key);
            return saved ? JSON.parse(saved) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
        } catch (error) {
            console.error(`Error saving localStorage key"${key}":`, error);
        }
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as const;
}

export default useLocalStorage;
