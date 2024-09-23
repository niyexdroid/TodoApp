import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.todoForm}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          placeholder="Add a new task..."
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
        />
        <button className={styles.modernButton} type="submit">
          ╋
        </button>
      </div>
    </form>
  );
}
