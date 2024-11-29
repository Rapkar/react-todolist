import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

function FilterButtons() {
  const { activeTab, setActiveTab } = useContext(TodoContext);

  const showItems = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="tolistBox">
        <li><button onClick={() => showItems('all')}>All</button></li>
        <li><button onClick={() => showItems('done')}>Done</button></li>
        <li><button onClick={() => showItems('pending')}>Pending</button></li>
      </ul>
    </div>
  );
}

export default FilterButtons;