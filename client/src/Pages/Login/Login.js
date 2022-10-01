import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    document.getElementsByTagName('body').classList += 'wave';

    return <div className="waveWrapper">
        <div class="content">
            <div class="flex-div">
                <div class="name-content">
                    <h1 class="logo">SocialMediaApp</h1>
                    <p>Connect with friends and the world around you on social media.</p>
                </div>
                <form>
                    <h1>Welcome</h1>
                    <br></br>
                    <input type="text" placeholder="Email or Phone Number" required />
                    <input type="password" placeholder="Password" required />
                    <button class="login">Log In</button>
                    <br></br>
                    <p class="">Forgot Password?</p>
                    <hr></hr>
                    <Link to='#' class="create-account">Create Account</Link>
                </ form>
            </div>
        </div>
    </div>
}
