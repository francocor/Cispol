import logo from '../assets/loguito.png'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import '../CSS/Header.css'

const Header = () => {
  return (
    <div id='Headercontenedor'>
        <Link to="/">
        <img src={logo} alt="logo-cispol" />
      </Link>

        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/Quienes-somos">¿Quienes somos?</Link>
                </li>
                <li>
                    <Link to="/Documentos">Documentos</Link>
                </li>
                <li>
                    <Link to="/Discursos">Discursos</Link>
                </li>
                <li>
                    <Link to="/Socios">Socios Estrategicos</Link>
                </li>
                <li>
                    <Link to="/Instituciones">Instituciones</Link>
                </li>
                <li>
                    <Link to="/Productos">Productos</Link>
                </li>
                <li>
                    <Link to="/Sponsors">Nuestro staff</Link>
                </li>
                <li>
                    <Link to="/Contacto">Contactanos</Link>
                </li>
                <li>
                <Link to="/Donar"><Button className="custom-button" variant="outline-warning">Donar</Button>
</Link>
                </li>
                

            </ul>
        </nav>
    </div>
    
  );
}

export default Header;