import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Courses from './pages/Course';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import SearchBar from './component/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page404 from './pages/Page404'
import Enrollment from './component/Enrollment';

const App = () => {
  return (
    <div className=''>
      <ToastContainer />
      <Navbar/>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/course' element={< Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/enrollment/:userId' element={<Enrollment />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App