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
                <div className='col-lg-6 col-md-6 col-xs-12 headerNav'>
                <h1 className='brandName'> MmX Diseño </h1>
                    <nav className='nav'>
                        <Link to='/category/jersey-algodon'><a className='nav-link navItem' href='#'>Jersey Alg</a></Link>
                        <Link to='/category/modal'><a className='nav-link navItem' href='#'>Modal</a></Link>
                        <Link to='/category/morley'><a className='nav-link navItem' href='#'>Morley</a></Link>
                        <Link to='/category/polar-soft'><a className='nav-link navItem' href='#'>Polar Soft</a></Link>
                    </nav>
                </div>
                <CartWidget />
            </header>
        </>
    );
};

export default Navbar; 