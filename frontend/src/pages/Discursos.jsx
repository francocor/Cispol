import Header from "../components/Header"
import Footer from "../components/Footer"
import "../CSS/Discursos.css";
const Discursos = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <main className="main">

        <h3>
        Esta es una recopilación de los mejores alegatos, que bien por el
        carisma de sus oradores o por la genialidad de su texto, se han conver
        tido en clásicos del arte de la declamación.
      </h3>

<div className="conteiner">

      <div className="card">
        <h2>Discurso Obama</h2>
  <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Official_portrait_of_Barack_Obama.jpg/320px-Official_portrait_of_Barack_Obama.jpg" alt="Imagen de Obama" />
        <p>
          parte de la victoria de Obama se debe a su carisma es un hecho. Una de
          las estrategias del presidente de EEUU es mostrarse cercano con lo s
          ciudadanos, por eso le hemos visto comiendo fast food en varios
          restaurantes del país, bailando en el show de Ellen DeGeneres, sacándose selfies en un
          vídeo viral para Buzzfed, etc.
        </p>
        <a href="https://youtu.be/Mtf6WkcTI-Q?si=LM7n15eLkEkP6D3b" target="_blank" rel="noopener noreferrer">Ver Video</a>
      </div>


      <div className="card">
        <h2>Discurso Evita</h2>
        <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Evita_color.jpg/230px-Evita_color.jpg" alt="Imagen de evita" />
        <p>
          Pocas mujeres han hablado con tanta fuerza como Evita la última vez
          que se dirigió a sus queridos descamisados, el 1 de mayo de 1952. E
          staba muriendo de cáncer y lo sabía. La respuesta de los argentinos
          ante la pasión de su discurso y su voz quebrada testimonia el amor del
          pueblo por la actriz.
        </p>
        <a href="https://youtu.be/X88Cg_3CXDU?si=dh34l4o6nM4JHioe" target="_blank" rel="noopener noreferrer">Ver Video</a>
      </div>


      <div className="card">
        <h2>Cofundador de Apple</h2>
        <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Steve_Wozniak_by_Gage_Skidmore.jpg" alt="Imagen de Apple" />
        <p>
          No podía faltar. Es, posiblemente, el discursos más inspirador que
          circula por Youtube, y uno de los más vistos. Las palabras del
          cofundador de Apple ante los alumnos la universidad de Stanford en
          2005 acumulan 21 millones de visualizaciones en el vídeo original. El
          resumen sería: Encontrad lo que amáis.
        </p>
        <a href="https://youtu.be/HHkJEz_HdTg?si=8LJtBP9LW1qSlgJZ" target="_blank" rel="noopener noreferrer">Ver Video</a>
      </div>


      <div className="card">
        <h2>Discurso de Allende</h2>
        <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Salvador_Allende_Gossens-.jpg" alt="Imagen de Allende" />
        <p>
          Seguramente ésta será la última oportunidad en que pueda dirigirme a
          ustedes. Palabras del ex presidente al pueblo chileno tras el Golpe de
          Estado del 11 de septiembre de 1973. Ese mismo
          día Salvador Allende se suicidaba. El texto del discurso deja frases memorables como: La historia
          es nuestra y la hacen los pueblos.
        </p>
        <a href="https://youtu.be/xZeEfXjTNu4?si=lceXbdf1hrGbQ4d5" target="_blank" rel="noopener noreferrer">Ver Video</a>
      </div>
    
      </div>
        </main>
        <br />
        <footer>
        <Footer/>
        </footer>
    </div>
  )
}

export default Discursos