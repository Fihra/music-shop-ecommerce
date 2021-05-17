import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Cart from './components/Cart';
import { data } from './components/data';
import React, { useEffect, useReducer } from 'react';
import { Actions } from './components/Actions';
import { ProductContext } from './components/ProductContext';

const initialState = {
  products: "",
  myCart: ""
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
    case Actions.DELETE_FROM_CART:
      const deleteCart = DeleteFromCart(state.myCart, action.payload);
      console.log(deleteCart);
      return{
        ...state,
        myCart: deleteCart
      }
    case Actions.EXISTING_CART:
      const cartExists = ExistingInCart();
      return {
        ...state,
        myCart: cartExists
      }
    default:
      return state;
  }
}

//Add to Cart
const AddingToCart = (currentCart, item) => {
  let newCart = [...currentCart];
  newCart = [...newCart, item];
  localStorage.setItem('myCart', JSON.stringify(newCart));
  return newCart;
}

//Delete from Cart
const DeleteFromCart = (currentCart, itemID) => {
  let newCart = [...currentCart];
  newCart = newCart.filter((item) => item.id !== itemID);
  if(newCart.length <= 0){
    localStorage.clear();
    return "";
  } else {
    localStorage.setItem('myCart', JSON.stringify(newCart));
    return newCart;
  }

}

//If Cart has items already
const ExistingInCart = () => {
  let storageCart = localStorage.getItem("myCart");
  storageCart = JSON.parse(storageCart);
  return storageCart;
}

const App = () => {
  const [productsData, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: Actions.GET_PRODUCTS, payload: data})
    if(localStorage.getItem("myCart") !== null){
      dispatch({type: Actions.EXISTING_CART})
    }
    if(localStorage.getItem("myCart") === "[]") localStorage.clear();
  }, [])

  return (
    <ProductContext.Provider value={{productsData: productsData, productDispatch: dispatch}}>
      <Router>
      <div className="App">
        <Navbar/>
        <h1>Music Shop</h1>
        <main>
        
          <Switch>
            <Route path="/about" render={(props) => <About {...props}/>}/>
            <Route path="/products" render={(props) => <Products {...props} />}/>
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
