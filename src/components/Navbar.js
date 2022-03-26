import logo from '../logo.svg';
import cart from '../cart.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar =() =>{
    return (
        <div className='container-fluid'>
            <header className='row header navbar-expand-lg navbar-light'>
                <div className='col-lg-3 col-md-12 col-xs-12 headerLogo'>
                    <img src={logo} className='brandLogo' alt='brand Logo' />
                </div>
                <div className='col-lg-6 col-md-12 col-xs-12 headerNav'>
                    <h1 className='brandName'> MMX Diseño textil </h1>
                    <nav className='nav'>
                        <a className='nav-link active navItem' aria-current='page' href='#'>Home</a>
                        <a className='nav-link navItem' href='#'>Cilindro</a>
                        <a className='nav-link navItem' href='#'>Schablon</a>
                        <a className='nav-link navItem' href='#'>Sublimado/Digital</a>
                    </nav>
                </div>
                <div className='col-lg-3 col-md-12 col-xs-12 headerCart'>
                    <button type='button' class='btn position-relative'>
                        <img src={cart} className='cartIcon' alt='brand Logo' />
                        <span class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>8</span>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Navbar; 