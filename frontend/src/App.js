import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import Product from './pages/Product.js';
import Collections from './pages/Collections.js';
import Collection from './pages/Collection.js';
import Contact from './pages/Contact.js';
import AdminBanner from './pages/AdminBanner.js';
import Signin from './pages/Signin.js';
import Register from './pages/Register';
import Cart from './components/Cart.js';
import NavBar from './components/NavBar.js';
import NavMenu from './components/NavMenu.js';
import Footer from './components/Footer.js';
import Hero from './components/Hero.js';
import About from './pages/About.js';

import MessageBox from './components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessage } from './redux/messageSlice';


function App() {
  const{ message } = useSelector(selectMessage);

  console.log(message);

  return (

    <div className="App">
      {message.isActive && (
        <MessageBox />
        )}
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Hero />
        <Switch>
          <Route path="/about/" component={About}>
            <About />
          </Route>
          <Route path="/contact/" component={Contact}>
            <Contact />
          </Route>
          <Route path="/adminbanner/">
            <AdminBanner />
          </Route>
          <Route path="/signin/" component={Signin}>
            <Signin />
          </Route>
          <Route path="/register/">
            <Register />
          </Route>
          <Route path="/all-products/">
            <Products />
          </Route>
          <Route path="/Product/:handle/">
            <Product />
          </Route>
          <Route path="/Collections/">
            <Collections />
          </Route>
          <Route path="/:collectionId">
            <Collection />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
