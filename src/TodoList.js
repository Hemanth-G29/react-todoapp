import TodoItem from "./TodoItem";
function TodoList({todos, onToggle, onDelete}) {
    if (todos.length === 0) {
        return <p className="text-muted text-center">No tasks yet!</p>;
    }
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo = {todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))
    }
    </ul>
  );
}
export default TodoList;
