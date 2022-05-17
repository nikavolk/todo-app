import { nanoid } from "nanoid";
import "./input.component.style.scss";

const Input = ({ inputText, setInputText, todoList, setTodoList, theme }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const clearInputText = () => {
    setInputText("");
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
          onClick={clearInputText}
          onChange={(e) => {
            inputTextHandler(e);
          }}
          required
          placeholder="Enter an item 😊"
        ></input>
        <button className="btn" onClick={submitTodoHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
