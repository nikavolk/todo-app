import { nanoid } from "nanoid";
import "./input.component.style.scss";

const Input = ({ inputText, setInputText, todoList, setTodoList }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    const generateId = nanoid();

    if (inputText) {
      setTodoList([
        ...todoList,
        { text: inputText, completed: false, id: generateId },
      ]);
      setInputText("");
    }
  };

  return (
    <div className="input-wrapper">
      <div className="input-circle" />
      <form>
        <input
          value={inputText}
          type="text"
          onChange={(e) => {
            inputTextHandler(e);
          }}
          required
        ></input>
        <button className="btn" onClick={submitTodoHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
