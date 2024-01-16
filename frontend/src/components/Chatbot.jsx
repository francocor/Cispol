import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Chat from "../assets/chat.png";

function Chatbot() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [result, setResult] = useState([
    {
      userinput:
        "¡Bienvenido al chat de CISPOL! Mi nombre es CISPOLO. ¿Cuál es tu nombre?",
      useroutput: "",
    },
  ]);

  const [timerRunning, setTimerRunning] = useState(false); // Estado para controlar el temporizador

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ChatbotBox = (e) => {
    e.preventDefault();

    if (result.length === 1) {
      setResult([
        ...result,
        {
          userinput: text,
          useroutput: `¡Hola, ${text}! ¿En qué puedo ayudarte?`,
        },
      ]);
    } else {
      setResult([
        ...result,
        { userinput: text, useroutput: "dirigiendo a contactos" },
      ]);
      // Iniciar el temporizador
      setTimerRunning(true);
    }

    setText("");
  };

  // Utiliza useEffect para controlar el temporizador
  useEffect(() => {
    if (timerRunning) {
      const timer = setTimeout(() => {
        // Redirige a la URL después de 3 segundos
        window.location.href = "http://127.0.0.1:5174/Contacto"; // Reemplaza "URL_de_destino" con la URL deseada.
      }, 700);

      return () => {
        clearTimeout(timer); // Limpia el temporizador si el componente se desmonta o el temporizador se reinicia
      };
    }
  }, [timerRunning]);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="m-5">
        <span style={{ marginRight: "0px"}}>
          {" "}
          <img src={Chat} alt="Icono" width="34px" height="34px" />
        </span>
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Bot CISPOL</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div style={{ height: "auto" }}>
            {result.map((item, index) => (
              <div key={index}>
                <div className="text-end">
                  <p
                    className="text-end text-dark px-2 btn"
                    style={{ backgroundColor: "#def4d5" }}
                  >
                    {item.userinput}
                  </p>
                </div>
                <div>
                  <p
                    className="text-start px-2 btn"
                    style={{ backgroundColor: "#f1f3f4" }}
                  >
                    {item.useroutput}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={ChatbotBox}>
            <input
              className="form-control p-2 m-2"
              type="text"
              placeholder="Hazme una pregunta"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            />
            <button className="btn btn-primary p-2" type="submit">
              Enviar
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Chatbot;