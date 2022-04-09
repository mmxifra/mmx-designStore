import logo from '../logo.svg';
import CartWidget from './CartWidget';

const Navbar =() =>{
    return (
        <>
            <header className='row header navbar-expand-lg navbar-light'>
                <div className='col-lg-3 col-md-3 col-xs-12 headerLogo'>
                <a href='#'>
                    <img src={logo} className='brandLogo' alt='brand Logo' />
                </a>
                </div>
                <div className='col-lg-6 col-md-6 col-xs-12 headerNav'>
                    <h1 className='brandName'> MmX Diseño </h1>
                    <nav className='nav'>
                        <a className='nav-link navItem' href='#'>Jersey Alg</a>
                        <a className='nav-link navItem' href='#'>Modal</a>
                        <a className='nav-link navItem' href='#'>Morley</a>
                        <a className='nav-link navItem' href='#'>Polar Soft</a>
                    </nav>
                </div>
                <CartWidget />
            </header>
        </>
    );
};

export default Navbar; 