import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login } from './pages/Login'
import { Admindashboard } from './pages/admin/Admindashboar'
import Protected from './component/protectroute'
import { Userdashboard } from './pages/user/Userdashboard'
import { Adddomain } from './pages/user/Adddomain'

function App() {


  return (
    <>
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
  
       <Route path='/admin' element={<Protected role={'admin'}><Admindashboard/></Protected>}/>
       <Route path='/user' element={<Protected role={'user'}><Userdashboard/></Protected>}/>
           <Route path='/user/adddomain' element={<Protected role={'user'}><Adddomain/></Protected>}/>
  </Routes>
</BrowserRouter>
 
    </>
  )
}

export default App
