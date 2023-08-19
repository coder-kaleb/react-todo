import { useState } from "react";
import "./todo.css";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";

export let taskNum = "";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const now = new Date();
  let currentMinute = now.getMinutes() + 1;
  let currentHour = now.getHours();
  taskNum = todo.length;
  const input = document.getElementById("input");

  function handleClick() {
    if (input.value) {
      setTodo((oldValue) => [...oldValue, todoValue]);
      setTodoValue("");
    } else {
      alert("You have to write something🖊🖋📝");
    }
  }

  function handleChange(e) {
    setTodoValue(e.target.value);
  }

  function handleDelete(indexPos) {
    const newTodoList = todo.filter((list, index) => {
      return index != indexPos;
    });
    setTodo(newTodoList);
  }
  function handleComplete(e) {
    const parentElement = e.target.parentElement;
    parentElement.classList.toggle("done");
    e.target.classList.toggle("checked");
  }
  function handleParentComplete(e) {
    e.target.classList.toggle("done");
    e.target.children[0].classList.toggle("checked");
  }

  return (
    <section className="todo">
      <div className="todo-txt-btn">
        <input
          type="text"
          placeholder="Todo. . ."
          value={todoValue}
          onChange={handleChange}
          id="input"
        />
        <button className="addTask" onClick={handleClick}>
          Add Task
        </button>
      </div>
      <div className="todo-list">
        <ul className="todo-task-wrap">
          {todo.map((list, index) => (
            <li key={index} className="task" onClick={handleParentComplete}>
              <AiOutlineCheckCircle
                className="icon-left"
                size={20}
                onClick={handleComplete}
              />
              <span className="currentTime">{`${currentHour}:${currentMinute}`}</span>
              <AiOutlineDelete
                className="icon-right"
                size={23}
                onClick={() => handleDelete(index)}
              />
              {list}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Todo;
