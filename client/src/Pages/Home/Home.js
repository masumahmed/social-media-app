import Header from '../../Components/Header/Header.js';
import Posts from '../../Components/Posts/Posts.js';
import './Home.css';

export default function Home() {
    if (!document.cookie.includes('LoggedIn=1')) {
        window.location.href = "/login";
    }

    return <div>
        <Header />
        <Posts />
    </div>
}
