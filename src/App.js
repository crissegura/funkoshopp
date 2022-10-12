import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import {CartProvider} from './context/CartContext';
import CartView from './components/CartView';
import Checkout from './components/Checkout';




function App() {
  return (
    <div className="App">
        <CartProvider>
            <BrowserRouter>
                <Navbarr />
                <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:categoria' element={<ItemListContainer />} />
                <Route path='/detalle/:id' element={<ItemDetailContainer />} />
                <Route path='/carrito' element={<CartView />} />
                <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
