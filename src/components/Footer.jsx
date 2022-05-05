import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import Fb from '../assets/facebook.svg';
import Ig from '../assets/instagram.svg';
import In from '../assets/linkedIn.svg';

const Footer = () => {
    return (
        <footer className='row footer'>
            <div className='col-lg-6 col-md-6 col-xs-6 footerLogo'>
                <Link to='/'><img src={logo} className='brandLogo footLogo' alt='brandLogo' /></Link>
            </div>
            <div className='col-lg-6 col-md-6 col-xs-6 socialMedia'>
                <a href='https://www.linkedin.com/in/mmxifra'><img src={In} alt='LinkedIn' className='footerIcon'/></a>
                <a href='https://www.instagram.com/mmxifra'><img src={Ig} alt='Instagram' className='footerIcon'/></a>
                <a href='https://www.facebook.com/mmxifra'><img src={Fb} alt='Facebook' className='footerIcon'/></a>                
            </div>
        </footer>
    );
};

export default Footer;