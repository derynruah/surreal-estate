import '../styles/navbar.css';
import logo from '../images/ufo-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" className='navbar-logo' />
            <h2 className='title'>Surreal Estate</h2>
            <ul className='navbar-links'>
                <li className='navbar-links-item'>
                    <Link to='/'>View Properties</Link>
                </li>
                <li className='navbar-links-item'>
                    <Link to='add-property'>Add a Property</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;