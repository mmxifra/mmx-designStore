import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from '../components/Navbar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = () => {
    return (
        <BrowserRouter className ='container-fluid App'>
            <Navbar />
            <Routes>
                <Route path ='/' element = {<ItemListContainer/>} />
                <Route path = '/category/:idCategory' element = {<ItemListContainer/>} />
                <Route path ='/item/:idItem' element = {<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Home;