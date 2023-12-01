import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Age from './Age';
import Category from './Category';
import Brand from './Brand';
import Character from './Character';
import Color from './Components/Color';
import Legos from './Components/Legos';
import Toys from './Components/Toys';
import Arrival from './Components/Arrival';
import Sellers from './Components/Sellers';
import Cream from './Components/Cream';
import Footer from './Components/Footer';
import Trackorder from './Components/Trackorder';
import Account from './Components/Account';
function Routes() {
  return (
    
    <div>
        
    <Navbar/>
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
      
      </div>
     

  )
}

export default Routes
