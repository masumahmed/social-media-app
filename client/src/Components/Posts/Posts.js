import './Posts.css'
import { Link } from 'react-router-dom';

export default function Posts() {
    return <div className="posts">
        <div className="postHeader">
            <img id="pfp" src="https://via.placeholder.com/32" />
            <span>
                <Link to="#">Display Name</Link>
            </span>
        </div>

        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr.</p>

        {/* <hr /> */}
        <img src="https://via.placeholder.com/1000"></img>

        <div id="commentSection">
            <h3>Comments</h3>
            <div className="commentPost">
                <span>
                    {/* <img id="pfp" src="https://via.placeholder.com/32" /> */}
                    <br />
                    <Link to="#">Display Name</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr.</p>
                </span>
            </div>
        </div>

        <div className="postFooter">
            <buttom><i className="fas fa-thumbs-up"></i></buttom>
            <buttom><i className="fas fa-thumbs-down"></i></buttom>
            <buttom><i className="fas fa-comments"></i></buttom>

            <p>Time Stamp</p>
        </div>
    </div>
}
