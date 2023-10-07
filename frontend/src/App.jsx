import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './pages/Index'
import Quienessomos from './pages/Quienessomos'
import Contacto from './pages/Contacto'
import Discursos from './pages/Discursos'
import Socios from './pages/Socios'
import Productos from './pages/Productos'
import Documentos from './pages/Documentos'
import Sponsors from './pages/Sponsors'
import Notfound from './pages/Notfound'
import { Admin } from './pages/Admin'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Index/>}/>
    <Route path='/Quienes-somos' element={<Quienessomos/>}/>
    <Route path='/Contacto' element={<Contacto/>}/>
    <Route path='/Discursos' element={<Discursos/>}/>
    <Route path='/Socios' element={<Socios/>}/>
    <Route path='/Productos' element={<Productos/>}/>
    <Route path='/Documentos' element={<Documentos/>}/>
    <Route path='/Sponsors' element={<Sponsors/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='*' element={<Notfound/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
