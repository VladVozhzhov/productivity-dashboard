import TodoItem from './TodoItem';

const TodoItems = ({ todos, handleDelete }) => {
  if (!Array.isArray(todos)) {
    console.error("Expected an array but got:", todos);
    return <p className="text-red-600">Error loading todos</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo}
          handleDelete={handleDelete}
        /> 
      ))}
    </ul>
  );
};

export default TodoItems;