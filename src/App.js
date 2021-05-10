import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import VSTs from './components/VSTs';
import Contact from './components/Contact';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <h1>Music Shop</h1>
      <main>
      
        <Switch>
          <Route path="/about" render={(props) => <About {...props}/>}/>
          <Route path="/vsts" render={(props) => <VSTs {...props}/>}/>
          <Route path="/contact" render={(props) => <Contact {...props}/>}/>
          <Route path="/cart" render={(props) => <Cart {...props}/>}/>
        </Switch>
      
      </main>
    </div>
    </Router>
  );
}

export default App;
