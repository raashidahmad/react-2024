export function Todo({ todo, dispatch, ACTIONS }) {
    return <>
        <div style={{color: todo.complete ? 'grey' : '#fff'}}>{todo.name} &nbsp;&nbsp; 
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE, payload: {id: todo.id}})}>Toggle</button>&nbsp;&nbsp;
            <button onClick={() => dispatch({type: ACTIONS.DELETE, payload: {id: todo.id}})}>Delete</button>
        </div>
    </>
}