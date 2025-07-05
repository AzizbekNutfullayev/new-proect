import React from 'react'
import Home from './controllers/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>}/>
      </Routes>
      </BrowserRouter>
 
    </div>
  )
}
