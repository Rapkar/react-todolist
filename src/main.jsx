import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TodoProvider } from './TodoContext';
import FilterButtons from './FilterButtons.jsx';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';
import './App.css';
import './Index.css';
function App() {


  return (
    <>
     <TodoProvider>
      <FilterButtons />
       <TodoForm />
      <TodoList /> 
      </TodoProvider>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);