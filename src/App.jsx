import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Template1 from './templates/template1/template1'
import Template2 from './templates/template2/template2'
import Home from './pages/Home'
import Template3 from './templates/template3/template3'
import Template4 from './templates/template4/template4'

function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
            <Route path='/template1' element={<Template1></Template1>} ></Route>
            <Route path='/template2' element={<Template2></Template2>} ></Route>
            <Route path='/template3' element={<Template3></Template3>} ></Route>
            <Route path='/template4' element={<Template4></Template4>} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
