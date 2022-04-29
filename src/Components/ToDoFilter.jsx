const ToDoFilter = ({
  toDoItems,
  setToDoItems,
  filteredItems,
  setFilteredItems,
}) => {
  // function for filtering itemList array by their state [active, completed]
  const filterItems = (state) => {
    setFilteredItems(
      toDoItems.filter((item) => {
        return item.state === state;
      })
    );
  };

  const removeCompleted = () => {
    setToDoItems(toDoItems.filter((item) => item.state !== "completed"));
  };

  return (
    <div>
      <div>
        {/*active.length > 0 ? active.length + " items left" : "No active items!"*/}
      </div>
      <div>
        <button
          onClick={() => {
            setFilteredItems(toDoItems);
          }}
        >
          All
        </button>
      </div>
      <div>
        {
          <button
            onClick={() => {
              filterItems("active");
            }}
          >
            Active
          </button>
        }
      </div>
      <div>
        {
          <button
            onClick={() => {
              filterItems("completed");
            }}
          >
            Completed
          </button>
        }
      </div>
      <div>
        <button
          onClick={() => {
            removeCompleted();
          }}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default ToDoFilter;
