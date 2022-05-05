import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import CartWidget from './CartWidget';

const Navbar =() =>{
    return (
        <>
            <header className='row header navbar-expand-lg navbar-light'>
                <div className='col-lg-3 col-md-3 col-xs-12 headerLogo'>
                    <Link to='/'><img src={logo} className='brandLogo' alt='brandLogo' /></Link>
                </div>
                <div className='col-lg-9 col-md-9 col-xs-12 headerNav'>
                <h1 className='brandName'> MmX Diseño </h1>
                    <nav className='navbar-nav nav'>
                        <Link to='/category/jersey-algodon'  className='nav-link'> Jersey Alg</Link>
                        <Link to='/category/modal'  className='nav-link'> Modal</Link>
                        <Link to='/category/morley'  className='nav-link'> Morley</Link>
                        <Link to='/category/polar-soft'  className='nav-link'> Polar Soft</Link>
                        <Link to='/cart'><CartWidget /></Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar; 
        