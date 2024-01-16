import Header from "../components/Header"
import Footer from "../components/Footer"
import "../CSS/Productos.css"
import { useEffect, useState } from "react";
import axios from "axios";


const Productos = () => {
  const [cursos, setCursos] = useState([]);

  
  const getcursos = () => {
    axios.get("http://localhost:8000/productos")
    .then((res) => {
            setCursos(res.data);

  })}
  useEffect(() => {
    getcursos()

  }, [])
  



  return (
    <div>
      <header>

        <Header/>
      </header>
      <main>  <br /> <br /> <br /> <br />
    <h3>Nuestros cursos y productos disponibles para la compra inmediata.</h3>
    <br />
      <div className="tarjetas">
        {cursos.map((curso) => (
          <div key={curso.id} className="tarjeta">
            <img src={curso.imagenURL} alt={curso.titulo} />
            <h2>{curso.titulo}</h2>
            <p>{curso.descripcion}</p>
            <a className="enlace-curso" href={curso.enlace} target="_blank" rel="noopener noreferrer">Comprar</a>
            
          </div>
        ))}
      </div>
      </main>

      <footer>

        <Footer/>
      </footer>
    </div>
  )
}

export default Productos