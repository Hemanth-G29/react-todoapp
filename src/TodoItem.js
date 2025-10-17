
function TodoItem({todo, onToggle, onDelete}) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center"
            style={{cursor: "pointer",
            marginBottom: "5px",
            backgroundColor: "#EEED09"

          }}>
                <span onClick={() => onToggle(todo.id)}
                      style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                    {todo.text}
                </span>
                <button className="btn btn-danger btn-sm text-white"
                        onClick={() => onDelete(todo.id)}>
                    Delete
                </button>
        </li>
    );
}
export default TodoItem;   
           