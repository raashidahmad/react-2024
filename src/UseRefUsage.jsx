import { useEffect, useState, useRef } from "react"

export function UseRefUsage() {
    const [name, setName] = useState('');
    const prevName = useRef('');
    const txtNameRef = useRef(null);

    useEffect(() => {
        prevName.current = name;
        txtNameRef.current.focus();
    });

    const style = {
        "marginTop": "10px"
    };

    return <>
        <input ref={txtNameRef} style={style} type="text" value={name} onChange={e => setName(e.currentTarget.value)} />
        <div style={style}>My name is {name} and my previous name was {prevName.current}</div>
    </>
}