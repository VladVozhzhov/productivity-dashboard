import TodoItems from './TodoItems';

const TodoList = ({ todos, fetchError, isLoading, handleDelete }) => {
  return (
    <main className='border-2 m-3 p-4 w-7xl mx-auto rounded-xl'>
      {isLoading && <p className='todo-stat-msg'>Loading todos...</p>}
      {!isLoading && fetchError && (
        <p className='todo-stat-msg text-red-600'>{fetchError}</p>
      )}
      {!isLoading && !fetchError && (
        todos?.length ? 
          <TodoItems todos={todos} handleDelete={handleDelete} /> 
          : <p className='todo-stat-msg'>No todos to display</p>
      )}
    </main>
  );
};

export default TodoList;