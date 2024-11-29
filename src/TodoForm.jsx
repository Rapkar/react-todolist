// TodoForm.jsx
import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

function TodoForm() {
  const [newTask, setNewTask] = useState('');
  const { handleAddTask } = useContext(TodoContext);

  const handleAdd = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        name: newTask,
        status: 'pending'
      };
      handleAddTask(task);
      setNewTask('');
    }
  };

  return (
    <div className='form'>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default TodoForm;