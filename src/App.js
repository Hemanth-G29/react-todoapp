import TodoList from './TodoList';
import TodoInput from './TodoInput';
import {useState} from 'react';
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() === "") return; // Prevent adding empty todos
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="container rounded mt-5">
      <div className="card text-white" >
        <div className="card-header" style={{backgroundColor: "#b89800", fontFamily:"Chiller, cursive"}}>
          <h1 className="card-title text-center">Todo List</h1>
        </div>
        <div className="card-body">
          <TodoInput onAdd={addTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
