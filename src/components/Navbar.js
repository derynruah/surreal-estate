import '../styles/navbar.css';
import logo from '../images/ufo-logo.png';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" className='navbar-logo' />
            <h2 className='title'>Surreal Estate</h2>
            <ul className='navbar-links'>
                <li className='navbar-links-item'>View Properties</li>
                <li className='navbar-links-item'>Add a Property</li>
            </ul>
        </nav>
    );
};

export default Navbar;