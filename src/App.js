import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='container-fluid App'>
      <Navbar />
      <ItemListContainer greeting='Bienvenido a MMX Diseño' />
    </div>
  );
}

export default App;
