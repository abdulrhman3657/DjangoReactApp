import { useState } from "react";
import api from "../api";
import { useNavigate, NavLink } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/LoginAndRegister.css"

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const res = await api.post('/api/token/', { username, password })
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/")
        } catch (error) {
            alert(error)
        }
    };

    return (<>
        <form onSubmit={handleSubmit} className="form-container">
            <h1>Login</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button className="form-button" type="submit">
            Login
            </button>
        </form>
        <NavLink className="form-button" to ={'/register'}>Register</NavLink>
        </>
    );
}

export default Login