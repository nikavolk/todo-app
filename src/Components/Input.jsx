import { nanoid } from "nanoid";

const Input = ({ inputText, setInputText, todoList, setTodoList }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    const generateId = nanoid();
    setTodoList([
      ...todoList,
      { text: inputText, completed: false, id: generateId },
    ]);
    setInputText("");
  };
  return (
    <div>
      <form>
        <input
          value={inputText}
          type="text"
          onChange={(e) => {
            inputTextHandler(e);
          }}
        ></input>
        <button onClick={submitTodoHandler}>Submit</button>
      </form>
    </div>
  );
};

export default Input;
