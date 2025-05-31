  import { useState } from 'react'
  import './App.css'
  import Navbar from './components/Navbar'
  import {
    BrowserRouter as Router,
    Routes, 
    Route
  } from 'react-router-dom';
  import Posts from './components/Posts'
  import Home from './components/Home'
  import About from './components/About'
  import Contact from './components/Contact'
  import Profile from './components/Profile'

  function App() {
    const [count, setCount] = useState(0)

    return (
      <>
        <Navbar/>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/post' element={<Posts/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
          </Routes>
        </Router>
      </>
    )
  }

  export default App
