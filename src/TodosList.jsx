import { TodoItem } from "./TodoItem"

export function TodosList({ todosList, toggleTodo, deleteTodo }) {
    return <ul className='list'>
    {todosList.map(item => {
      return <TodoItem {...item} key={item.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    })}
   </ul>
}