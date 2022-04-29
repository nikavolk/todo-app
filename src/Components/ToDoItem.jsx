import { useEffect } from "react";

const ToDoItem = ({
  toDoItems,
  setToDoItems,
  filteredItems,
  setFilteredItems,
}) => {
  useEffect(() => {
    setFilteredItems(toDoItems);
  }, [toDoItems]);

  const removeItem = (itemIndex) => {
    setToDoItems(toDoItems.filter((_, index) => index !== itemIndex));
  };

  const generateList = filteredItems.map((item, index) => {
    return (
      <div key={index}>
        <div>
          <input
            type="checkbox"
            onChange={() => {
              console.log(`clicked ${index}`);
            }}
          />
        </div>
        <div>{item.text}</div>
        <button
          onClick={() => {
            removeItem(index);
          }}
        >
          X
        </button>
      </div>
    );
  });

  return (
    <div>
      {generateList.length > 0 ? (
        <div>{generateList}</div>
      ) : (
        <div>No entries found</div>
      )}
    </div>
  );
};

export default ToDoItem;
