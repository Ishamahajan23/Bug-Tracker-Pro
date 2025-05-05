import { useState } from 'react'
import './App.css'
import { LogTable } from './components/LogTable'
import {Routes, Route, Link} from 'react-router-dom'
import { Upload } from './Pages/Upload'
import { LogsPage } from './Pages/LogsPage'
import { Develoers } from './Pages/Develoers'


function App() {
 



  
 

  return (
    <>
 
       
       <Routes>
        <Route path='/' element={<Upload/>}>Upload</Route>
        <Route path='/upload' element={<Upload/>}></Route>
        <Route path='/logs' element={<LogsPage/>}></Route>
        <Route path='/logs/search/:devId' element={<Develoers/>}></Route>
       </Routes>
      
    </>
  )
}


export default App
