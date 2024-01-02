import { useEffect, useState } from 'react'
import Title from './components/Title/Title.jsx';
import { TodoInput } from './components/TodoInput/TodoInput.jsx';
import { TodoList } from './components/TodoList/TodoList.jsx';
import { FILTERS } from './components/consts/filters.js';
import { ToDo } from './components/ToDo/ToDo.jsx';

function App() {

  const { ALL, ACTIVE, COMPLETED } = FILTERS;

  const [todos, setTodos] = useState([]);

  const [activeFilter, setActiveFilter] = useState(ALL);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    if (activeFilter === ALL) {
      setFilteredTodos(todos);
    } else if (activeFilter === ACTIVE) {
      const activeTodos = todos.filter(todo => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if(activeFilter === COMPLETED) {
      const completedTodos = todos.filter(todo => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos])

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    };

    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  };

  const handleSetComplete = (id) => {
    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      };
      return todo;
    });

    setTodos(updatedList);
  };

  const handleClearComplete = () => {
    const updatedList = todos.filter(todo => !todo.completed);
    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id)
    setTodos(updatedList);
  };

  const showAllTodos = () => {
    setActiveFilter(ALL);
  };

  const showActiveTodos = () => {
    setActiveFilter(ACTIVE);
  };

  const showCompletedTodos = () => {
    setActiveFilter(COMPLETED);
  };

  return (
    <>
      <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
        <div className='container flex flex-col max-w-xl'>
          <Title />
          <TodoInput addTodo={addTodo} />
          <TodoList
            activeFilter={activeFilter}
            todos={filteredTodos}
            showAllTodos={showAllTodos}
            showActiveTodos={showActiveTodos}
            showCompletedTodos={showCompletedTodos}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete}
            handleClearComplete={handleClearComplete} />
        </div>
      </div>
    </>
  )
}

export { App }
