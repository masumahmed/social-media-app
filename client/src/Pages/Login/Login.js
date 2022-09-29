import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div id="login">
            <h1>Login</h1>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Password"></input>
            <Link to='#'>Forgot email?</Link>
            <br></br>
            <Link to='#'>Forgot password?</Link>
            <spacer></spacer>
            <div>
                <button type="submit">Sign Up</button>
                <button id='submit' type="submit">Login</button>
            </div>
        </div>
    );
}
