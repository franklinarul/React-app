import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Loginfrom from './components/Loginform.jsx'
import Loginfailed from './loginfailed.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Loginfrom></Loginfrom>}></Route>
    <Route path='/home' element={<App></App>}></Route>
    <Route path='/loginfailed' element={<Loginfailed></Loginfailed>}></Route>
  </Routes>
  </BrowserRouter>
)
