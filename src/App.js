import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import Displaylist from "./components/Displaylist";

function App() {
  //used to add single items
  const [input, setInput] = useState("");

  //This will fetch data on load from local storage
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("ToDoList");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  return (
    <div className="container card " style={{ width: "25rem" }}>
      <div className="card-body ">
        <Header />
        <Form
          input={input}
          setInput={setInput}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <Displaylist todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}

export default App;
