import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return <div class="content">
        <div class="flex-div">
            <div class="name-content">
                <h1 class="logo">SocialMediaApp</h1>
                <p>Connect with friends and the world around you on social media.</p>
            </div>
            <form>
                <h1>Login</h1>
                <br></br>
                <input type="text" placeholder="Email or Phone Number" required />
                <input type="password" placeholder="Password" required />
                <button class="login">Log In</button>
                <Link to="#">Forgot Password ?</Link>
                <hr></hr>
                <Link to='#' class="create-account">Create Account</Link>
            </ form>
        </div>
    </div>
}
