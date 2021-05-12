import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import VSTs from './components/VSTs';
import Contact from './components/Contact';
import Cart from './components/Cart';
import { data } from './components/data';
import React, { useEffect, useState, useReducer } from 'react';
import { Actions } from './components/Actions';
import { ProductContext } from './components/ProductContext';

const initialState = {
  products: "",
  myCart: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case Actions.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case Actions.ADD_TO_CART:
      const newCart = AddingToCart(state.myCart, action.payload);
      console.log(newCart);
      return {
        ...state,
        myCart: newCart 
      }
    default:
      return state;
  }
}

const AddingToCart = (currentCart, item) => {
  let newCart = [currentCart];
  newCart = [...newCart, item];
  return newCart;
}

const App = () => {
  const [productsData, dispatch] = useReducer(reducer, initialState);
  console.log(data);

  useEffect(() => {
    dispatch({type: Actions.GET_PRODUCTS, payload: data})
  }, [])
  console.log(productsData);
  return (
    <ProductContext.Provider value={{productsData: productsData, productDispatch: dispatch}}>
      <Router>
      <div className="App">
        <Navbar/>
        <h1>Music Shop</h1>
        <main>
        
          <Switch>
            <Route path="/about" render={(props) => <About {...props}/>}/>
            <Route path="/vsts" render={(props) => <VSTs {...props} />}/>
            <Route path="/contact" render={(props) => <Contact {...props}/>}/>
            <Route path="/cart" render={(props) => <Cart {...props}/>}/>
          </Switch>
        
        </main>
      </div>
      </Router>
    </ProductContext.Provider>
  );
}

export default App;
