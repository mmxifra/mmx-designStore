import Navbar from '../components/Navbar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';

const Home = () => {
    return (
        <div className='container-fluid App'>
            <Navbar />
            <ItemDetailContainer />
            {/*<ItemListContainer greeting='Bienvenido a MMX Diseño' />*/}
        </div>
    );
};

export default Home;