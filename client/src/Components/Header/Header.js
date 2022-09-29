import './Header.css';

function Header() {
    return (
        <header class="topnav">
            <nav>
                <ul>
                    <li> <a href="/" id="logo"> <i class="fa-solid fa-sun"></i> </a> </li>
                    <li id="space2"></li>
                    <li> <a class="sqbtn tooltip" data-tooltip="Home" href="/"> <i class="fas fa-home"></i> </a> </li>
                    <li> <a class="sqbtn tooltip" data-tooltip="Profile" href="/profile"> <i class="fas fa-user-alt"></i> </a> </li>
                    <li id="space1"></li>
                    <li> <button class="btn tooltip" data-tooltip="Search"> <i class="fas fa-search"></i> </button> </li>
                    <li> <button class="btn tooltip" data-tooltip="Post"><i class="fas fa-plus"></i></button> </li>
                    <li> <button class="btn tooltip" data-tooltip="Message"><i class="fab fa-facebook-messenger"></i></button></li>
                    <li> <button class="btn tooltip" data-tooltip="Settings"> <i class="fas fa-gear"></i></button></li>
                    <li> <button class="btn tooltip" data-tooltip="Logout"> <i class="fas fa-right-from-bracket"></i></button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
