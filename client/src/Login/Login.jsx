import React from "react";
import './Login.scss';

const Login = () => {
    return (
        <div className='login-container'>
            <form method="POST" action="http://localhost:4000/login">
                <h3>Login</h3>
                <label htmlFor="username">Username</label>
                <input name='username' type="text" placeholder="Username" required />

                <label htmlFor="password">Password</label>
                <input name="password" type="password" placeholder="Password" required />

                <button>Log In</button>
            </form>
        </div>
    );
};

export default Login;