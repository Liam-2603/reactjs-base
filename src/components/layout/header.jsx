import { Link, NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return(
        <ul>
            
            {/* <li><Link to="/" className="active">Home page</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/products">Product page</Link></li> */}
            <li><NavLink to="/" >Home page</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/products">Product page</NavLink></li>
        </ul>
    );
}

export default Header