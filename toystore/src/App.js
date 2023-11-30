import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Age from './Components/Age';
import Category from './Components/Category'
import Brand from './Components/Brand';
import Character from './Components/Character';
import Color from './Components/Color';
import Legos from './Components/Legos';
import Toys from './Components/Toys';
import Arrival from './Components/Arrival';
import Sellers from './Components/Sellers';
import Cream from './Components/Cream';
import Footer from './Components/Footer';
import Trackorder from './Components/Trackorder';
import Account from './Components/Account';
function App() {
  return (
    <div>

<Navbar/>
<Account/>
<Footer/>

      {/* <Navbar/>
      <Trackorder/> */}
      {/* <Router> */}
        {/* <Navbar/>
      <Home/>
      <Age/>
      <Category/>
      <Brand/>
      <Character/>
      <Color/>
      <Legos/>
      <Toys/>
      <Arrival/>
      <Sellers/>
      <Cream/>
      <Footer/>

      <Routes>
      
      <Route path="/track-order"element={<Trackorder/>}/>
      </Routes>
      
    </Router> */} 
      {/* <Navbar/>
      <Home/>
      <Age/>
      <Category/>
      <Brand/>
      <Character/>
      <Color/>
      <Legos/>
      <Toys/>
      <Arrival/>
      <Sellers/>
      <Cream/>
      <Footer/> */}
    </div>
  );
}

export default App;
