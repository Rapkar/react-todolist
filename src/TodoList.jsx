import { useContext, useEffect } from 'react';
import Sortable from 'sortable-dnd';
import { TodoContext } from './TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { tasks, activeTab } = useContext(TodoContext);

  useEffect(() => {
    // Initialize Sortable only after the component has mounted
    const groupElement = document.getElementById('group');
    if (groupElement) {
      new Sortable(
        document.getElementById('group'),
        {
          draggable: '.todo',
          handle: ".handle",
          chosenClass: "chosen",
          selectedClass: "selected",
        }
      )

      // Cleanup function to destroy sortable on component unmount
      return () => {
        // sortable.destroy();
      };
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className='listbox'>
      <ul id='group' className='items'>
        {tasks
          .filter(task => activeTab === 'all' || task.status === activeTab)
          .map(task => (
            <TodoItem key={task.id} task={task} activeTab={activeTab} />
          ))}
      </ul>
    </div>
  );
}

export default TodoList;