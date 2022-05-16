import "./todoitem.component.style.scss";

const TodoItem = ({ todoList, setTodoList, item }) => {
  const deleteHandler = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const checkHandler = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="item-wrapper">
      <form onSubmit={submitHandler}>
        <div>
          <button onClick={() => checkHandler(item.id)}>O</button>
        </div>
        <div className="item-text">{item.text}</div>
        <div>
          <button
            onClick={() => {
              deleteHandler(item.id);
            }}
          >
            X
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoItem;
