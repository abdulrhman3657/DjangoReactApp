import { useState } from "react";
import api from "../api";
import { useNavigate, NavLink } from "react-router-dom";
import "../styles/LoginAndRegister.css"

function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const res = await api.post('/api/user/register/', { username, password });
            navigate("/login");
        } catch (error) {
            alert(error)
        }
    };

    return (<>
        <form onSubmit={handleSubmit} className="form-container">
            <h1>Register</h1>
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
            Register
            </button>
        </form>
        <NavLink className="form-button" to ={'/login'}>Log in</NavLink>
        </>
    );
}

export default Register