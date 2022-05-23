import { useEffect, useState } from "react";
import "./filter.component.style.scss";

const Filter = ({ setStatus, todoList, setTodoList, theme }) => {
  const [active, setActive] = useState([]);

  // set status to filter by
  const filterHandler = (filter) => {
    setStatus(filter);
  };

  // remove all completed items
  const clearHandler = () => {
    setTodoList(todoList.filter((item) => item.completed === false));
  };

  // update state to show active items
  useEffect(() => {
    setActive(todoList.filter((item) => item.completed === false));
  }, [todoList]);

  // render active items number and text
  const activeNumber = active.length;
  const activeItems = () => {
    if (activeNumber === 0) {
      return <div>No active items</div>;
    } else if (activeNumber === 1) return <div>1 item left</div>;
    else {
      return <div>{`${activeNumber} items left`}</div>;
    }
  };

  return (
    <div className="filter-wrapper">
      <div className="state-adjacent">{activeItems()}</div>
      <div className={`state-btn-wrapper ${theme === "dark" ? "dark" : ""}`}>
        <div className="btn-filters">
          <button className="btn-filter" onClick={() => filterHandler()}>
            All
          </button>
          <button
            className={`btn-filter ${theme === "dark" ? "dark" : ""}`}
            onClick={() => filterHandler("active")}
          >
            Active
          </button>
          <button
            className={`btn-filter ${theme === "dark" ? "dark" : ""}`}
            onClick={() => filterHandler("completed")}
          >
            Completed
          </button>
        </div>
      </div>
      <div className="state-adjacent right">
        <button
          className={`btn-remove-completed ${theme === "dark" ? "dark" : ""}`}
          onClick={clearHandler}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Filter;
