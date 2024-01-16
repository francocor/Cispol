import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, Button } from "react-bootstrap";
import Paypal from '../assets/paypal.jpg'
import MP from '../assets/mercadopago.jpg'
 
const Donar = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <h1>Esto es Donar</h1>
        <div className="contenedor">
          <div className="divMP">
            <Card>
              <Card.Img variant="top" src={MP} />
              <Card.Body>
                <Card.Title>Donación por MercadoPago</Card.Title>
                <Card.Text>
                  Ayuda a nuestra fundación con una donación de $500.
                </Card.Text>
                <Button variant="primary">Donar</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={MP} />
              <Card.Body>
                <Card.Title>Donación por MercadoPago</Card.Title>
                <Card.Text>
                  Ayuda a nuestra fundación con una donación de $1000.
                </Card.Text>
                <Button variant="primary">Donar</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={MP} />
              <Card.Body>
                <Card.Title>Donación por MercadoPago</Card.Title>
                <Card.Text>
                  Ayuda a nuestra fundación con una donación de $2000.
                </Card.Text>
                <Button variant="primary">Donar</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="divPaypal">
            <Card>
              <Card.Img variant="top" src={Paypal} />
              <Card.Body>
                <Card.Title>Donación PayPal</Card.Title>
                <Card.Text>
                  Si prefieres usar PayPal, puedes hacer una donación aquí.
                </Card.Text>
                <Button variant="primary">Donar a través de PayPal</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Donar;
