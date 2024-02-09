import { useState, useRef } from "react";

export function NewTodoForm({ addNewItem }) {
    const [newItem, setNewItem] = useState("");
    const inputRef = useRef(null);

    function handleSubmit(e) {
        e && e.preventDefault();
        if (!newItem) {
            return;
        }
        addNewItem(newItem);
        setNewItem("");
        inputRef.current.focus();
    }

    return <form onSubmit={handleSubmit} className='new-item-form'>
        <label htmlFor='item'>Add New Item</label>
        <input ref={inputRef} value={newItem} onChange={e => setNewItem(e.target.value)} type='text' id='item' />
        <button className='btn'>Add Item</button>
    </form>
}