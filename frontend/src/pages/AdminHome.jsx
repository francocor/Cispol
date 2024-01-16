import Footer from "../components/Footer"
import HeaderAdmin from '../components/HeaderAdmin';


const AdminHome = () => {
  

  return (
    <div>
      <header>
        <HeaderAdmin/>
      </header>

        <section>
          <h1>Socios</h1>
          {/* Contenido de la sección "Socios" */}
        </section>

        <section>
          <h1>Instituciones</h1>
          {/* Contenido de la sección "Instituciones" */}
        </section>


        <section>
          <h1>Discursos</h1>
          {/* Contenido de la sección "Discursos" */}
        </section>

        <section>
          <h1>Documentos</h1>
          {/* Contenido de la sección "Documentos" */}
        </section>

        <section>
          <h1>Staff</h1>
          {/* Contenido de la sección "Staff" */}
        </section>


      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AdminHome;