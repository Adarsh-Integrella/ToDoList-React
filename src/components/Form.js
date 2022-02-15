import React from "react";
import { useEffect } from "react";

function Form({ input, setInput, todoList, setTodoList }) {
  const handleInputValue = (e) => {
    setInput(e.target.value);
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Enter text to add something!");
    } else {
      setTodoList([...todoList, { item: input, key: Date.now() }]);
      setInput("");
    }
  };

  // Used to store list in local storage
  useEffect(() => {
    localStorage.setItem("ToDoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="d-flex">
      <input
        type="text"
        placeholder="Enter something to add!"
        value={input}
        required
        className="form-control form-control-lg"
        onChange={handleInputValue}
      />
      <button
        type="submit"
        className="btn btn-warning"
        onClick={handleSubmitEvent}
      >
        Add item
      </button>
    </div>
  );
}

export default Form;
