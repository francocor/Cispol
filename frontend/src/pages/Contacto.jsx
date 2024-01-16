import Header from "../components/Header";
import Footer from "../components/Footer";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/Bs";
import "../CSS/Contacto.css";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, una llamada a una API.
    console.log("Formulario enviado");
  };

  return (
    <div>

      <br /> <br />
      <header>
        <Header />
      </header>
      <br />
      <main>
        <h1>Contacto</h1>
        <h3>
          Aquí tienes a tu disposición, diversos medios de contactos para poder
          comunicarte con nosotros, que van desde redes sociales, hasta el
          formulario que se encuentra al final de la página.
        </h3>
        <div className="ContenedorTodo">
          <div className="ContenedorIzquierdo">
            <div className="IconosLink">
              <a
                href="https://www.facebook.com/cispol.ok"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook size={32} />
                <span>Visita nuestro Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/cispol.ok/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram size={32} />
                <span>Visita nuestro Instagram</span>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                <BsWhatsapp size={32} />
                <span>Ir a nuestro Whatsapp</span>
              </a>
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
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingrese su nombre completo"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingrese su email"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Verifica tu email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingrese nuevamente su email"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Número de contacto:</label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  placeholder="Ingresar característa del pais y el número de contacto"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Ingrese aquí su consulta"
                  required
                />
              </div>

              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </main>
      <br />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contacto;
