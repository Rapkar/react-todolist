// TodoItem.jsx
import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

function TodoItem({ task, activeTab }) {
  const { handleRemoveTask, handleUpdateTask } = useContext(TodoContext);
  const [isChecked, setIsChecked] = useState(task.status === 'done');
  const [editMode, setEditMode] = useState(false);
  const [taskName, setTaskName] = useState(task.name);

  const handleRemove = () => handleRemoveTask(task.id);

  const handleNameChange = (e) => setTaskName(e.target.value);

  const handleStatusChange = (e) => {
    const newStatus = e.target.checked ? 'done' : 'pending';
    setIsChecked(e.target.checked);
    handleUpdateTask(task.id, { ...task, status: newStatus });
  };

  const handleEditToggle = () => {
    if (editMode) {
      // Save changes when exiting edit mode
      handleUpdateTask(task.id, { ...task, name: taskName });
    }
    setEditMode(!editMode);
  };

  // If the task does not match the active tab filter, do not render it
  if (activeTab !== 'all' && task.status !== activeTab) {
    return null;
  }

  return (
    <li className={`todo ${task.status}`}>
      <i class="handle">☰</i>
      <input 
        type="text" 
        value={taskName} 
        readOnly={!editMode} 
        onChange={handleNameChange} 
      />
      <div>
        <button onClick={handleRemove}>Delete</button>
        <button onClick={handleEditToggle}>{editMode ? 'Save' : 'Edit'}</button>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleStatusChange} 
        />
      </div>
    </li>
  );
}

export default TodoItem;