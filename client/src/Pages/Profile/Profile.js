import './Profile.css'
import Header from '../../Components/Header/Header.js';
import Posts from '../../Components/Posts/Posts.js';

export default function Profile() {
    if (!document.cookie.includes('LoggedIn=1')) {
        window.location.href = "/login";
    }

    return <div>
        <Header />
        <div id="profile2">
            <img id="bannerImg" src="https://via.placeholder.com/2000"></img>
            <div id="subheader">
                <img id="pfp" src="https://via.placeholder.com/512"></img>
                <div id="meta">
                    <h1>Display Name</h1>
                    <p>bio</p>
                    <span>
                        <p>URL</p>
                        <p>Joined date</p>
                        <p>birthday date</p>
                    </span>
                </div>
            </div>
        </div>

        <div id="filterChips">
            <button className="filterChip">All</button>
            <button className="filterChip"><i className="fa-solid fa-photo-film"></i> &nbsp;Media</button>
            <button className="filterChip"><i className="fa-solid fa-font"></i> Text</button>
            <button className="filterChip"><i className="fa-solid fa-filter"></i> &nbsp;Filter</button>
        </div>

        <Posts />
    </div>
}
