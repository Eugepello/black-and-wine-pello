import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<ItemListContainer bienvenida="Black and Wine" />} />

        <Route
          path='/category/:categories' 
          element={<ItemListContainer/>} />

        <Route
          path='/detail/:idItem'
          element={<ItemDetailContainer />} />

        <Route
          path='/cart'
          element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
