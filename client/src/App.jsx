import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import { logo } from './assets';
import {Home, CreatePost} from './pages';

const App = () => {
  return (
    <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white
    sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post"
      className="font-inter font-medium bg-[#0c4a6e] text-white 
      px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#94a3b8]
    min-h-[calc (100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
      </Routes>    
    </main>

    <footer>
      Developed by Kristina Barooah.
    </footer>
    </BrowserRouter>
  )
}

export default App;