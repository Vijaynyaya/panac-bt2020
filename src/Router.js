import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Home, Product, Cart } from './components';

const Router = () => {
    const [cart, setCart] = useState([])
    const addToCart = (id) => {
        if (!cart.includes(id)) {
            setCart([id, ...cart])
        }
    }
    
    return <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home addToCart={addToCart} />}/>
            <Route exact path='/cart' element={<Cart cart={cart} />} />
            <Route path="/product/:id" element={<Product addToCart={addToCart}/>} />
            <Route path="*" element={_ => <h1>404 Not Found</h1> }/>
        </Routes> 
    </BrowserRouter>
}

export default Router;