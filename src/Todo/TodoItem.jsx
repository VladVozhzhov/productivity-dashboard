const TodoItem = ({ todo, handleDelete }) => {
  if (!todo || !todo.id) {
    console.error("Invalid todo item received");
    return null;
  }

  return (
    <li className="flex items-center justify-between border m-2 p-2 w-6xl mx-auto text-lg rounded-lg">
      <h3 className="flex-1 text-center">{todo.body || 'No content'}</h3>
      <p className="flex-1 text-center">{todo.datetime || 'No date'}</p>
      <button 
        className="text-red-700 cursor-pointer flex-1"
        onClick={(e) => {
          e.preventDefault();
          handleDelete(todo.id);
        }}
        aria-label={`Delete todo: ${todo.body}`}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;