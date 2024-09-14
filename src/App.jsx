import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import  Login from './Pages/Login'
import order from './Pages/order'
import Placeorder from './Pages/Placeorder'
import Contact from './Pages/Contact'

import Product from './Pages/Product'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <div className='px-4  sm:px-[5vw]  md:px-[7vw] lg:px-[9vw]'>
      
      <Navbar/>

      <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
         <Route path='/order' element={<order/>}/>
         <Route path='/place-order' element={<Placeorder/>}/>
         <Route path='/product/:productid' element={<Product/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
     
          
      </Routes>
    </div>
  )
}

export default App
