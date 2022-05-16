import "./todoitem.component.style.scss";
import deleteIcon from "../../Assets/Images/icon-cross.svg";

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
    <div>
      <form onSubmit={submitHandler}>
        <div className="item-wrapper">
          <div className="item-checkbox">
            <input
              type="checkbox"
              name={item.id}
              id={item.id}
              onClick={() => checkHandler(item.id)}
            />
            <label for={item.id} className="item-text">
              {item.text}
            </label>
          </div>
          <div className="btn-delete">
            <img
              src={deleteIcon}
              onClick={() => {
                deleteHandler(item.id);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoItem;
