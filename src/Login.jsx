import { useState } from "react"
import { setAuthToken } from "./services/AuthService";
import { useNavigate } from "react-router";

export function Login() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (userName && password) {
            setAuthToken();
            navigate("/home");
        } else {
            setError("Username/Password is incorrect");
        }
    }

    const errorStyle = {
        margin: "10px",
        color: "red"
    }

    return <>
        <div className="form">
            <form onSubmit={handleSubmit}>
                { error && error.length > 0 && <div className={errorStyle}>{error}</div> }
                <div>
                    <input type="text" value={userName} placeholder="Enter User Name" onChange={(e) => {
                        setUserName(e.target.value);
                    }} />
                </div>
                <div>
                    <input type="password" value={password} placeholder="Enter Password" onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </>
}