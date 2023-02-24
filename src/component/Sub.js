import React, { lazy, Suspense } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const Home = lazy(()=>(import('./pages/Home')))
const Products = lazy(()=>(import('./pages/Products')))
const Blog = lazy(()=>(import('./pages/Blog')))
const Contact = lazy(()=>(import('./pages/Contact')))
const Shop = lazy(()=>(import('./pages/Shop')))
const Register = lazy(()=>(import('./Register')))
const ShopDetails = lazy(()=>(import('./ShopDet')))

const Sub = () => {
  return (
    <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/products' element={<Products />}></Route>
            <Route path='/blog' element={<Blog />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact />} />
            <Route path = '/register' element={<Register />}/>
            <Route path = '/products/:id' element={<ShopDetails />}/>
        </Routes>
        </Suspense>
    </Router>
  )
}

export default Sub