import { usePageContext } from "../../../../../context/PageContext";

function FilterGroupBtn() {
    const { setPage } = usePageContext();

    const allPage = () => setPage("all");
    const activePage = () => setPage("active");
    const completedPage = () => setPage("completed");

    return (
        <div className="control-btn group">
            <div className="control-btn group">
                <button className="btn" onClick={allPage}>
                    All
                </button>
                <button className="btn" onClick={activePage}>
                    Active
                </button>
                <button className="btn" onClick={completedPage}>
                    Completed
                </button>
            </div>
        </div>
    );
}

export default FilterGroupBtn;
