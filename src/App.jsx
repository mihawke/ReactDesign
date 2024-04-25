import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Template1 from './templates/template1/template1'

function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Template1></Template1>} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
