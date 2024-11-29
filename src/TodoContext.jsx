// TodoContext.js
import { createContext, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('items') || '[]'));

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('items', JSON.stringify(updatedTasks));
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('items', JSON.stringify(updatedTasks));
  };

  const handleUpdateTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map(task => task.id === taskId ? updatedTask : task);
    setTasks(updatedTasks);
    localStorage.setItem('items', JSON.stringify(updatedTasks));
  };

  return (
    <TodoContext.Provider value={{ activeTab, setActiveTab, tasks, handleAddTask, handleRemoveTask, handleUpdateTask }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };