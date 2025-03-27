const NewTodo = ({ handleSubmit, setTodoBody, todoBody, setTodoDate, todoDate }) => {
  const handleDateChange = (e) => setTodoDate(e.target.value);

  return (
    <main className="border-2 w-2xl mx-auto py-2 rounded-3xl my-2">
      <h2 className="flex justify-center items-center text-3xl">New To-do</h2>
      <form onSubmit={handleSubmit} className="flex w-xl mx-auto justify-between px-4 py-3 ">
        <input
          type="text"
          value={todoBody}
          onChange={(e) => setTodoBody(e.target.value)}
          placeholder="Add a new todo"
          required
          className="p-1 border rounded"
        />
        
        <input
          type="date"
          value={todoDate}
          onChange={handleDateChange}
          className="p-1 border rounded"
        />
        
        <button type="submit" className="border rounded p-2 cursor-pointer">Add To-do</button>
      </form>
    </main>
  );
};

export default NewTodo;