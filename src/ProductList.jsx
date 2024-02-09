import { useEffect, useState } from "react"

export function ProductList({ url }) {
    const [data, setData] = useState([]);

    function fetchData(url) {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setData(json.results);
        }) 
        .catch(error => console.error(error));
    }

    function renderGender(gender) {
        if (gender === "male") {
            return <td>Male ✔✔</td>
        }
        return <td>Female ✔</td>
    }

    useEffect(() => {
        if (url) {
            fetchData(url);
        }
    }, []);

    return (<>
        {data && data.length ?  <div>
            <h6>Loaded data from Url {url}</h6>
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Height</th>
                            <th>Eye Color</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(d => {
                            return <tr key={d.created}>
                                <td>{d.name}</td>
                                <td>{d.height}</td>
                                <td>{d.eye_color}</td>
                                {renderGender(d.gender)}
                            </tr>
                        })}
                    </tbody>

                </table>
            </div>
        </div> : <div>
            <p>Data is loading...</p>
        </div>}
    </>);
}