import './Home.css';
import Header from '../../Components/Header/Header.js';

export default function Home() {
    if (!document.cookie.includes('loggedIn=1'))
        window.location.href = "/login";

    return <div>
        <Header />
    </div>
}
