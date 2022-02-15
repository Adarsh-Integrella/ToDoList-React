import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import Displaylist from "./components/Displaylist";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  //used to add single items
  const [input, setInput] = useState("");
  const [showListText, useShowListText] = useState("Show list");
  let flag = false;
  //This will fetch data on load from local storage
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("ToDoList");
    if (savedTodos) {
      flag = true;
      return JSON.parse(savedTodos);
    } else {
      flag = false;
      return [];
    }
  });

  return (
    <div className="container card " style={{ width: "25rem" }}>
      <div className="card-body ">
        <BrowserRouter>
          <Header />
          <Form
            input={input}
            setInput={setInput}
            todoList={todoList}
            setTodoList={setTodoList}
          />

          <Routes>
            <Route path="/" element={<header />}></Route>
            <Route
              path="/displaylist"
              element={
                <Displaylist todoList={todoList} setTodoList={setTodoList} />
              }
            ></Route>
          </Routes>
          <Link to="displaylist">
            <p>Show list</p>
          </Link>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
