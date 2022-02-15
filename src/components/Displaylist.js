import React from "react";

function Displaylist({ setTodoList, todoList }) {
  const deleteItem = (key) => {
    const newList = todoList.filter((item) => {
      return item.key !== key;
    });
    setTodoList(newList);
  };

  return (
    <div>
      {todoList.map((element) => {
        return (
          <div
            key={element.key}
            className="d-flex d-inline p-2 mx-auto justify-content-center"
          >
            <p className="m-4">{element.item}</p>
            <button
              class="btn btn-outline-danger"
              onClick={() => deleteItem(element.key)}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Displaylist;
