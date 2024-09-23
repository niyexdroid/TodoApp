import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
  };
  const handleClick = (name) => {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const finished = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span className={finished} onClick={() => handleClick(item.name)}>
          {item.done ? <span>✔</span> : null} {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.delbutton}
          >
            🗑
          </button>
        </span>
      </div>
      <hr className={styles.hr} />
    </div>
  );
}
