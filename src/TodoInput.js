function TodoInput({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.elements.todoText.value;
    onAdd(text);
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input type="text" name="todoText" className="form-control" placeholder="New task..." />
        <button type="submit" className="btn btn-primary">Add Todo</button>
      </div>
    </form>
    );
}
export default TodoInput;