import '../CSS/Footer.css';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/Bs';

const Footer = () => {
  return (
    <div id="Footercontenedor">
      <h3>
        Visita nuestras redes sociales:
        <div className="social-icons">
        <a href="https://www.facebook.com/cispol.ok" target='_blank' rel="noreferrer"><BsFacebook size={32} /></a>
        <a href="https://www.instagram.com/cispol.ok/" target='_blank' rel="noreferrer"><BsInstagram size={32} /></a>
        <a href="https://whatsapp.com" target='_blank' rel="noreferrer"><BsWhatsapp size={32} /></a>
        </div>
      </h3>
      <h3>© 2023 M.A. Programación. Todos los derechos reservados.</h3>
    </div>
  );
}

export default Footer;