import { useReducer, useRef, useState } from "react"
import { Todo } from "./Todo";

const ACTIONS = {
    ADD: 'add',
    DELETE: 'delete',
    TOGGLE: 'toggle'
}
let counter = 0;

function reducer(todos, action) {
    switch(action.type) {
        case ACTIONS.ADD:
            return [...todos, newTodo(action.payload.name)]

        case ACTIONS.TOGGLE:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, complete: !todo.complete};
                }
                return todo;
            });

        case ACTIONS.DELETE:
            return todos.filter((todo) => todo.id != action.payload.id);
    }
    return todos;
}

function newTodo(name) {
    return { id: ++counter, name: name, complete: false };
}

export function ReducerUsage() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');
    const nameRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD, payload: { name: name }});
        setName('')
        nameRef.current.focus();
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" value={name} onChange={(e) => { setName(e.target.value); }} />
        </form>
        {todos.map((todo) => {
           return <Todo key={todo.id} todo={todo} ACTIONS={ACTIONS} dispatch={dispatch} />
        })}
    </>
}