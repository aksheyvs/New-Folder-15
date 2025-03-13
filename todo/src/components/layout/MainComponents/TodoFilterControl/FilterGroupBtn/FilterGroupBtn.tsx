import { usePageContext } from "../../../../../context/PageContext";
import { useState } from "react";

function FilterGroupBtn() {
    const { page, setPage } = usePageContext();
    const [active, setActive] = useState("active");

    const allPage = () => setPage("all");
    const activePage = () => setPage("active");
    const completedPage = () => setPage("completed");

    return (
        <div className="control-btn group">
            <button className={`btn ${page === "all" ? active : ""}`} onClick={allPage}>
                All
            </button>
            <button className={`btn ${page === "active" ? active : ""}`} onClick={activePage}>
                Active
            </button>
            <button className={`btn ${page === "completed" ? active : ""}`} onClick={completedPage}>
                Completed
            </button>
        </div>
    );
}

export default FilterGroupBtn;
