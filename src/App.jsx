import {} from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/blog/Home'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import AddBlog from './pages/blog/AddBlog'
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AddBlog" element={<AddBlog />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
