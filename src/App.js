import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppBar from './Components/AppBar'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<AppBar/>}>
      <Route index element={<div>home</div>}/>
      <Route path='register' element={<div>register</div>}/>
      <Route path='singin' element={<div>signin</div>}/>
    </Route>
   </Routes>
  )
}

export default App
