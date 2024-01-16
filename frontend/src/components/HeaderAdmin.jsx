import { Link } from 'react-router-dom'
import '../CSS/Header.css'

const HeaderAdmin = () => {
  return (
    <div>
                <nav>
            <ul>
                <li>
                    <Link to="/Admin/Documentos">Cargar documentos</Link>
                </li>
                <li>
                    <Link to="/Admin/Discursos">Cargar discursos</Link>
                </li>
                <li>
                    <Link to="/Admin/Socios">Cargar socios strategicos</Link>
                </li>
                <li>
                    <Link to="/Admin/Instituciones">Cargar instituciones</Link>
                </li>
                <li>
                    <Link to="/Admin/Productos">Cargar productos</Link>
                </li>
                <li>
                    <Link to="/Admin/Sponsors">Cargar staff</Link>
                </li>
                <li>
                    <Link to="/">Volver a inicio</Link>
                </li>
                

            </ul>
        </nav>
    </div>
  )
}

export default HeaderAdmin