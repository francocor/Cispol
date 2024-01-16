import Footer from "../components/Footer";
import Header from "../components/Header";


const Instituciones = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <h1>Esto es instituciones</h1> 
        <div className="card">
          <a href="https://www.facebook.com/cpatriagrande/"> 
          <img src="https://pbs.twimg.com/profile_images/1388847509569736710/CZGpb2vc_400x400.jpg"
              style={{ width: "300px", height: "300px" }}
              alt=""/>
            </a>
        </div>

        <div className="card">
          <a href="https://observatorioplanificacion.cepal.org/es/instituciones/consejo-nacional-de-coordinacion-de-las-politicas-sociales-de-la-argentina"> 
          <img src="https://autoresdeargentina.com/wp-content/uploads/2023/06/Tapa-final.jpg"
              style={{ width: "300px", height: "300px" }}
              alt=""/>
            </a>
        </div>

        <div className="card">
          <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/61724/norma.htm"> 
          <img src="https://poderciudadano.org/wp-content/uploads/2018/12/OA.jpg"
              style={{ width: "300px", height: "300px" }}
              alt=""/>
            </a>
        </div>

        <div className="card">
          <a href="http://vocabularios.saij.gob.ar/portalthes/?task=fetchTerm&arg=32&v=16"> 
          <img src="https://catalogo.jus.gob.ar/uploads/r/archivo-nacional-de-la-memoria/1/f/3/1f337651d3b63d6d47d9996d6f40af75a4a80a40ea6d9b8360f062bab6e65074/AR-ANM-SPyDP_141.jpg"
              style={{ width: "300px", height: "300px" }}
              alt=""/>
            </a>
        </div>
      </main>
      <br />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Instituciones;