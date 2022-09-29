import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="topnav">
            <nav>
                <ul>
                    <li> <Link to="/" id="logo"> <i className="fa-solid fa-sun"></i> </ Link> </li>
                    <li id="space2"></li>
                    <li> <Link className="sqbtn tooltip" data-tooltip="Home" to="/"> <i className="fas fa-home"></i> </ Link> </li>
                    <li> <Link className="sqbtn tooltip" data-tooltip="Profile" to="/profile"> <i className="fas fa-user-alt"></i> </ Link> </li>
                    <li id="space1"></li>
                    <li> <button className="btn tooltip" data-tooltip="Search"> <i className="fas fa-search"></i> </button> </li>
                    <li> <button className="btn tooltip" data-tooltip="Post"><i className="fas fa-plus"></i></button> </li>
                    <li> <button className="btn tooltip" data-tooltip="Message"><i className="fab fa-facebook-messenger"></i></button></li>
                    <li> <button className="btn tooltip" data-tooltip="Settings"> <i className="fas fa-gear"></i></button></li>
                    <li> <Link to='/login' className="btn tooltip" data-tooltip="Logout"> <i className="fas fa-right-from-bracket"></i></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
