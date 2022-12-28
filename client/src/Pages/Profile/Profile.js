import './Profile.css'
import Header from '../../Components/Header/Header.js';
import Posts from '../../Components/Posts/Posts.js';
import $ from 'jquery';

export default function Profile() {
    if (!document.cookie.includes('LoggedIn=1')) {
        window.location.href = "/login";
    }

    let obj = {
        header: "https://picsum.photos/2000",
        pfp: "https://randomuser.me/api/portraits/women/46.jpg",
        first_name: "Display",
        last_name: "Name",
        bio: "bio",
        URL: "https://google.com",
        joined_date: "01/01/1979",
        birthday: "01/01/1979"
    };

    let User = {};
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            User = data.results[0];
            obj.first_name = "htis";
            obj.first_name = data.results[0].name.first;
        }
    });

    return <div>
        <Header />
        <div id="profile2">
            <img id="bannerImg" src={obj.header} alt=""></img>
            <div id="subheader">
                <img id="pfp" src={obj.pfp} alt=""></img>
                <div id="meta">
                    <h1>{obj.first_name} {obj.last_name}</h1>
                    <p>bio</p>
                    <span>
                        <p> <a className="no-underline text-white" href={obj.URL}> {obj.URL} </a> </p>
                        <p>{obj.joined_date}</p>
                        <p>{obj.birthday}</p>
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
        <br />
    </div>
}
