import './Login.css'
import { Link } from 'react-router-dom'

const submitForm = async () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const response = await fetch(`/api/user/${email}`, {
        method: 'GET'
    });

    let res = await response;
    console.log(res);
}

export default function Login() {
    document.getElementsByTagName('body').classList += 'wave';

    return <div className="waveWrapper">

        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n      .wave {\n        animation: wave 32s linear infinite;\n      }\n\n      .wave1 {\n        animation: wave1 16s linear infinite;\n      }\n\n      .wave2 {\n        animation: wave2 8s linear infinite;\n      }\n\n      @keyframes wave {\n        0% {\n          transform: translateX(0%);\n        }\n\n        100% {\n          transform: translateX(100%);\n        }\n      }\n\n      @keyframes wave1 {\n        0% {\n          transform: scaleY(1.2) translateX(0%);\n        }\n\n        100% {\n          transform: scaleY(1.2) translateX(100%);\n        }\n      }\n\n      @keyframes wave2 {\n        0% {\n          transform: scaleY(.8) translateX(0%);\n        }\n\n        100% {\n          transform: scaleY(.8) translateX(100%);\n        }\n      }\n    " }} />
                <path id="sineWave" fill="#d63f3f" fillOpacity="0.2" d="M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 V0 H0" />
            </defs>
            <use className="wave" href="#sineWave" />
            <use className="wave" x="-100%" href="#sineWave" />
            <use className="wave1" href="#sineWave" />
            <use className="wave1" x="-100%" href="#sineWave" />
            <use className="wave2" href="#sineWave" />
            <use className="wave2" x="-100%" href="#sineWave" />
        </svg>

        <div className="content">
            <div className="flex-div">
                <div className="name-content">
                    <h1 className="logo">SocialMediaApp</h1>
                    <p>Connect with friends and the world around you on social media.</p>
                </div>
                <form>
                    <h1>Welcome</h1>
                    <br></br>
                    <input id="email" value="masuma23" type="text" placeholder="Email or Phone Number" required />
                    <input id="password" type="password" placeholder="Password" required />
                    <button onClick={submitForm} className="login">Log In</button>
                    <br></br>
                    <Link href="#" className="">Forgot Password?</Link>
                    <hr></hr>
                    <Link to='#' className="create-account">Create Account</Link>
                </ form>
            </div>
        </div>
    </div>
}
