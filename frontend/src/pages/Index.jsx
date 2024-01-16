import Footer from "../components/Footer";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Index.css";
import Chatbot from "../components/Chatbot";
import Carousel from "react-bootstrap/Carousel";

const Index = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <br />
        <h1>BIENVENIDOS A CISPOL</h1>
        <h3>Centro de investigaciones sociales y políticas latinoamericanas</h3>

        <Carousel interval={3000}>
          <Carousel.Item>
            <img
              className="Carrusel"
              src="https://humanidades.com/wp-content/uploads/2017/05/discurso-1-e1568306779423.jpg" style={{ width: "600px", height: "400px" }}
              alt="Primera imagen"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carrusel"
              src="https://scontent.ftuc2-1.fna.fbcdn.net/v/t39.30808-6/360118812_293992009685472_4704655219361744703_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CEKIKjYagzUAX_ZBLdp&_nc_ht=scontent.ftuc2-1.fna&oh=00_AfBRw4rEz9-Pj784wWFNGn_RVtccY0e6FND-Upy2Gv00Pw&oe=654EFD1C" style={{ width: "600px", height: "400px" }}
              alt="Segunda imagen"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carrusel"
              src="https://www.radioshock.com.ar/wp-content/uploads/2023/03/Actualidad-Politica-en-Argentina.jpg" style={{ width: "600px", height: "400px" }}
              alt="Cuarta imagen"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carrusel"
              src="https://scontent.ftuc2-1.fna.fbcdn.net/v/t39.30808-6/392810559_340482131703126_6190638834373989374_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BfaL2ozQ6YcAX8IO4Oh&_nc_ht=scontent.ftuc2-1.fna&oh=00_AfCTx7Zk3KAjJP1A-leumpmH2mGONFGafe1G_fxwqetghQ&oe=654E5591" style={{ width: "600px", height: "400px" }}
              alt="Tercera imagen"
            />
          </Carousel.Item>
        </Carousel>

        <Chatbot />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
