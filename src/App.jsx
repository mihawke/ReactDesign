import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Design1 from './templates/template1/Design1'

function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Design1></Design1>} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
