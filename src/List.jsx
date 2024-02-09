import { useEffect, useState } from "react";

export function List({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
     setItems(getItems(5));
     console.log("Updating items...");   
    }, [getItems]);

    return <>
        {items.map(item => {
            return <div key={item}>{item}</div>
        })}
    </>
}