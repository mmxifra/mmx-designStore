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
                        <Link to='/category/jersey-algodon'><p className='nav-link navItem'>Jersey Alg</p></Link>
                        <Link to='/category/modal'><p className='nav-link navItem'>Modal</p></Link>
                        <Link to='/category/morley'><p className='nav-link navItem'>Morley</p></Link>
                        <Link to='/category/polar-soft'><p className='nav-link navItem'>Polar Soft</p></Link>
                    </nav>
                </div>
                <Link to='/cart'><CartWidget /></Link>
            </header>
        </>
    );
};

export default Navbar; 