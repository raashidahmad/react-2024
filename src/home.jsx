import { useState, useEffect } from 'react';
import { NewTodoForm } from './NewTodoForm';
import './style.css'
import { TodosList } from './TodosList';
import { ProductList } from './ProductList';
import { Link } from 'react-router-dom';

export function Home() {
    const [todosList, setTodosList] = useState(() => {
        let fetchTodosList = localStorage.getItem("todosList");
        if (fetchTodosList === null) {
          return [];
        }
        return JSON.parse(fetchTodosList);
      });
    
      useEffect(() => {
        localStorage.setItem("todosList", JSON.stringify(todosList));
        //new logConsole;
        //logConsole ``;
      }, [todosList]);
    
      function addNewItem(title) {
        setTodosList((currentTodoList) => {
          return [...currentTodoList, { id: crypto.randomUUID(), title: title, completed: false }];
        });
      }
    
      function toggleTodo(id, completed) {
        setTodosList((currentTodoList) => {
          return currentTodoList.map((todo) => {
            if (todo.id === id) {
              return {...todo, completed};
            }
            return todo;
          });
        }) 
      }
    
      function deleteTodo(id) {
        setTodosList((currentTodoList) => {
          return currentTodoList.filter(t => t.id !== id);
        })
      }

    return <>
        <NewTodoForm addNewItem={addNewItem} />
        <h1 className='header'>To Do List</h1>
        {todosList.length === 0 && "No Todos to show"}
        <TodosList todosList={todosList} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        <ProductList url={"https://swapi.dev/api/people"} />
        <div>
            <Link to="/expnsive">Expensive Calculation</Link>
        </div>
    </>
}