import Header from "../components/Header";
import Footer from "../components/Footer";
import "../CSS/Documentos.css"

const Documentos = () => {
  
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
      <h1>Documentos</h1>
      <p>
Desde esta sección podrás acceder a todo tipo de estudios, artículos, documentos, entre otras cosas, que sean de relevancia en nuestra organización, ya sean propios o cortesía de nuestros aliados estratégicos.

Solo tienes que hacer clic en el documento
</p>
<p>
<ul className="link">
  <li>
    <a href="/pdf/ENCUESTA NACIONAL DICIEMBRE 2020.pdf" target="_blank"><h5>Encuesta nacional Diciembre (2020), gentileza de Acierto Consultora</h5></a>
  </li>
  <li>
    <a href="/pdf/foto de campaña.pdf" target="_blank"><h5>Cómo tener una buena foto de campaña</h5></a>
  </li>
  <li>
    <a href="/pdf/la-democracia-participativa-Daniela-Valencia.pdf" target="_blank"><h5>La democracia Participativa</h5></a>
  </li>
  <li>
    <a href="/pdf/LIBRO DE ESTRATEGIA  La Teoria de la Aproximacion indirecta.pdf" target="_blank"><h5>Libro: La estrategia de la aproximación indirecta</h5></a>
  </li>
  <li>
    <a href="/pdf/RELATÓRIO TERMÔMETRO DA CAMPANHA_ IPESPE-ABRAPEL - RODADA 02 -10 SET 2022_.pdf" target="_blank"><h5>Relatório Termômetro Da Campanha</h5></a>
  </li>
  <li>
    <a href="/pdf/La Estrategia.pdf" target="_blank"><h5>El paso a paso para construir una estrategia</h5></a>
  </li>
  
    <a href="/pdf/foto de campaña.pdf" target="_blank"><h5>Cómo conseguir una buena foto para tu candidato</h5></a>
  
  <li>
    <a href="/pdf/Informe-Estudio de Consumos Culturales en Argentina 2022 - Fundación COLSECOR.pdf" target="_blank"><h5>Estudio de consumos culturales en la Argentina</h5></a>
  </li>
  <li>
    <a href="/pdf/ENERO 2023.pdf" target="_blank"><h5>Informe Nacional - Enero 2023, gentileza Zuban Córdoba y Asociados</h5></a>
  </li>
  <li>
    <a href="/pdf/Juventudes y elecciones Dossier 2023.pdf" target="_blank"><h5>Juventudes y Elecciones - Argentina 2023, gentileza Zuban Córdoba y Asociados</h5></a>
  </li>
</ul>
</p>
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
  );
};

export default Documentos;