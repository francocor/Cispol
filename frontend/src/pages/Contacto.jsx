import Header from "../components/header";
import Footer from "../components/Footer";
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/Bs';
import '../CSS/Contacto.css';

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, una llamada a una API.
    console.log('Formulario enviado');
  };

  return (
    <div>
      <Header />
      <h1>Contacto</h1>
      <h3>Aquí tienes a tu disposición, diversos medios de contactos para poder comunicarte con nosotros, que van desde redes sociales, hasta el formulario que se encuentra al final de la página.</h3>
      <div className="ContenedorTodo">
        <div className="ContenedorIzquierdo">
          <div className="IconosLink">
            <a href="https://www.facebook.com/cispol.ok" target='_blank' rel="noreferrer"><BsFacebook size={32} />Visita nuestro Facebook</a>
            <a href="https://www.instagram.com/cispol.ok/" target='_blank' rel="noreferrer"><BsInstagram size={32} />Visita nuestro Instagram</a>
            <a href="https://whatsapp.com" target='_blank' rel="noreferrer"><BsWhatsapp size={32} />Ir a nuestro Whatsapp</a>
          </div>
          <div className="H4Container">
            <h4>Teléfono: +54 9 381 625 4007</h4>
            <h4>Correo electrónico: cispol.asociacioncivil@gmail.com</h4>
          </div>
        </div>
        <div className="ContenedorDerecho">
          <form className="ContenedorForm" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" rows="4" required />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;