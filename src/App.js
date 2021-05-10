import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import VSTs from './components/VSTs';
import Contact from './components/Contact';
import Cart from './components/Cart';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <h1>Music Shop</h1>
      <main>
      <Router>
        <Switch>
          <Route path="/about" render={(renderProps) => <About/>}/>
          <Route path="/vsts" render={(renderProps) => <VSTs/>}/>
          <Route path="/contact" render={(renderProps) => <Contact/>}/>
          <Route path="/cart" render={(renderProps) => <Cart/>}/>
        </Switch>
      </Router>
      </main>
    </div>
  );
}

export default App;
