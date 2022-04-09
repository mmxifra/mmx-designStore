import Navbar from '../components/Navbar';
import ItemListContainer from '../components/ItemListContainer';

const Home = () => {
    return (
        <div className='container-fluid App'>
            <Navbar />
            <ItemListContainer greeting='Bienvenido a MMX Diseño' />
        </div>
    );
};

export default Home;