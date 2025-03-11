import { createContext, useContext, Dispatch, SetStateAction } from "react";

type PageContextType = {
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
};

export const PageContext = createContext<PageContextType | undefined>(undefined);

export function usePageContext() {
    const page = useContext(PageContext);

    if (page === undefined) {
        throw new Error("usePageContext must be used within a pageContext");
    }
    return page;
}
