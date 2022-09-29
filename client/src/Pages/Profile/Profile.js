import './Profile.css'
import Header from '../../Components/Header/Header.js';

export default function Profile() {
    if (!document.cookie.includes('LoggedIn=1')) {
        window.location.href = "/login";
    }

    return <div>
        <Header />
    </div>
}
