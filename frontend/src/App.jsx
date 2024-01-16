import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Quienessomos from "./pages/Quienessomos";
import Contacto from "./pages/Contacto";
import Discursos from "./pages/Discursos";
import Socios from "./pages/Socios";
import Productos from "./pages/Productos";
import Documentos from "./pages/Documentos";
import Sponsors from "./pages/Sponsors";
import Notfound from "./pages/Notfound";
import { Admin } from "./pages/Admin";
import Instituciones from "./pages/Instituciones";
import AdminHome from "./pages/AdminHome";
import Donar from "./pages/Donar";
import DiscursosAdmin from "./pages/DiscursosAdmin";
import DocumentosAdmin from "./pages/DocumentosAdmin";
import InstitucionesAdmin from "./pages/InstitucionesAdmin";
import ProductosAdmin from "./pages/productosAdmin";
import SociosAdmin from "./pages/SociosAdmin";
import SponsorsAdmin from "./pages/SponsorsAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Quienes-somos" element={<Quienessomos />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Discursos" element={<Discursos />} />
          <Route path="/Socios" element={<Socios />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Documentos" element={<Documentos />} />
          <Route path="/Sponsors" element={<Sponsors />} />
          <Route path="/adminpolitica" element={<Admin />} />
          <Route path="/admin/Home" element={<AdminHome />} />
          <Route path="/Instituciones" element={<Instituciones/>} />
          <Route path="*" element={<Notfound />} />
          <Route path="/Donar" element={<Donar/>} />
          <Route path="/Admin/Discursos" element={<DiscursosAdmin/>} />
          <Route path="/Admin/Documentos" element={<DocumentosAdmin/>} />
          <Route path="/Admin/instituciones" element={<InstitucionesAdmin/>} />
          <Route path="/Admin/Productos" element={<ProductosAdmin/>} />
          <Route path="/Admin/Socios" element={<SociosAdmin/>} />
          <Route path="/Admin/Sponsors" element={<SponsorsAdmin/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
