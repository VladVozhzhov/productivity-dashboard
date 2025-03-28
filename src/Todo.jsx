import { useState, useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import { format } from 'date-fns';
import SearchTodo from './Todo/SearchTodo'
import NewTodo from './Todo/NewTodo';
import TodoList from './Todo/TodoList';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3500',
});

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [todoBody, setTodoBody] = useState('');
  const [todoDate, setTodoDate] = useState('');

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/todos');

  useEffect(() => {  
    if (data && Array.isArray(data)) {
      setTodos(data); 
    } else if (data && data.todos && Array.isArray(data.todos)) {
      setTodos(data.todos); 
    } else {
      console.error("Unexpected API response:", data);
      setTodos([]); 
    }
  }, [data]);
  

  useEffect(() => {
    const filteredResults = todos.filter((todo) =>
      todo.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [search, todos]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!todoBody.trim()) return;
  
    try {
      const id = todos.length ? +todos[todos.length - 1].id + 1 : 1;
      const newTodo = {
        id,
        body: todoBody.trim(),
        datetime: todoDate 
          ? format(new Date(todoDate), 'do MMMM yyyy') 
          : 'No date set'
      };
  
      const response = await api.post('/todos', newTodo);
      
      setTodos(prev => [...prev, response.data]);
      setTodoBody('');
      setTodoDate('');
    } catch (err) {
      console.error('Failed to add todo:', err.response?.data || err.message);
    }
  };
  
  const handleDelete = async (id) => {
    if (!id || isNaN(Number(id))) {
      console.error("Invalid ID for deletion:", id);
      return;
    }

    try {
      await api.delete(`/todos/${id}`);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };
  return (
    <section className='border-3 my-6 rounded-4xl'>
      <NewTodo
        handleSubmit={handleSubmit}
        setTodoBody={setTodoBody}
        todoBody={todoBody}
        setTodoDate={setTodoDate}
        todoDate={todoDate}
      />
      <SearchTodo 
        search={search}
        setSearch={setSearch}
      />
      <TodoList
        todos={searchResults.length ? searchResults : todos}
        fetchError={fetchError}
        isLoading={isLoading}
        handleDelete={handleDelete}
      />
    </section>
  );
};

export default Todo;
