import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { selectMessage } from './redux/messageSlice';
import { useSelector } from 'react-redux';
import About from './pages/About.js';
import Admin from './pages/Admin.js';
import AdminBanner from './pages/AdminBanner.js';
import AdminHelp from './pages/AdminHelp.js';
import Banner from './pages/Banner.js';
import Cart from './components/Cart.js';
import Collection from './pages/Collection.js';
import Collections from './pages/Collections.js';
import Contact from './pages/Contact.js';
import Footer from './components/Footer.js';
// import Hero from './components/Hero.js';
import Home from './pages/Home.js';
import MessageBox from './components/MessageBox';
import NavBar from './components/NavBar.js';
import NavMenu from './components/NavMenu.js';
import Product from './pages/Product.js';
import Products from './pages/Products.js';
import Profile from './pages/Profile.js';
import Register from './pages/Register';
import Signin from './pages/Signin.js';


function App() {
  const { message } = useSelector(selectMessage);

  //console.log(message);

  return (

    <div className="App">
      {message.isActive && (
        <MessageBox />
      )}
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Banner />

        {/* <Hero /> */}
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
          <Route path="/adminhelp/">
            <AdminHelp />
          </Route>
          <Route path="/admin/">
            <Admin />
          </Route>
          <Route path="/signin/" component={Signin}>
            <Signin />
          </Route>
          <Route path="/register/">
            <Register />
          </Route>
          <Route path="/profile/">
            <Profile />
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
