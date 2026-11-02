
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/blog/Home'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import AddBlog from './pages/blog/AddBlog'
import EditBlog from './pages/blog/EditBlog'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs/add" element={<AddBlog />} />
        <Route path="/blogs/edit" element={<EditBlog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

