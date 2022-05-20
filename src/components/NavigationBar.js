import { Link } from "react-router-dom";

import "../assets/css/navigationBar.css";

// const NavBarMenus = () => {
//     return (
//         <div className="nav_menu_container">
//             <Link to='' className="menu_item">Menu1</Link>
//             <Link to='' className="menu_item">menu2</Link>
//             <Link to='' className="menu_item">menu3</Link>
//         </div>
//     )
// }

const LoginMenu = () => {
    return (
        <div className="login_menu_container">
            <Link to='/login' className="login_menu">Login</Link>
            <Link to='/join' className="login_menu">Join</Link>
        </div>
    )
}

const NavigationBar = () => {
    return (
        <nav className="navigation_container">
            <Link to="/" className="logo_link">STS</Link>
            {/* <NavBarMenus/> */}
            <LoginMenu/>
        </nav>
    )
}

export default NavigationBar;