import { useState, useEffect } from 'react';
import Axios from 'axios';
import HeaderAdmin from "../components/HeaderAdmin"
import Footer from "../components/Footer"
import '../CSS/ProductosAdmin.css'

const ProductosAdmin = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [enlace, setEnlace] = useState('');
  const [imagenURL, setImagenURL] = useState('');
  const [modoEdicion, setModoEdicion] = useState(false);
  const [modoAgregar, setModoAgregar] = useState(false);
  const [productoEditado, setProductoEditado] = useState();
  const [auxiliarId, setAuxiliarId] = useState();
  
 
  useEffect(() => {

   getproductos()
  }, []); 

  const getproductos = ()=>{
    Axios.get('http://localhost:8000/productos')
      .then((res) => setProductos(res.data))
      .catch((error) => console.error('Error al obtener productos:', error));
  }

  const handleAgregar = () => {
    if (!validarCamposAgregar()){
      return;
    }
    Axios.post('http://localhost:8000/productos/registrar', {
      titulo,
      descripcion,
      enlace,
      imagenURL,
    })
      .then(() => {
        getproductos()
        setModoAgregar(!modoAgregar)
        limpiarCampos();
        alert('Se agregó correctamente');
      })
      .catch((error) => console.error('Error al agregar producto:', error));
  };

  const validarCamposAgregar = () => {
    if (!titulo.trim() || !descripcion.trim() || !enlace.trim() || !imagenURL.trim()) {
      alert('Por favor, completa todos los campos antes de guardar.');
      return false;
    }
    return true;
  };

  const limpiarCampos = () => {
    setTitulo('');
    setDescripcion('');
    setEnlace('');
    setImagenURL('');
  };
  


  const handleEditar = (id) => {
    const productoSeleccionado = productos.find(producto=>producto.idProducto === id)
    setModoEdicion(true);
    setProductoEditado(productoSeleccionado);
    setAuxiliarId(id)
  };
  

  const handleEliminar = (id) => {
    Axios.delete(`http://localhost:8000/productos/eliminar/${id}`)
      .then(() => {
        getproductos()
        alert('Se eliminó correctamente');
      })
      .catch((error) => console.error('Error al eliminar producto:', error));
  };



  const handleGuardar = () => {
    if (modoEdicion) {
   
      Axios.put(`http://localhost:8000/productos/editar/${auxiliarId}`, {
        titulo: productoEditado.titulo,
        descripcion: productoEditado.descripcion,
        enlace: productoEditado.enlace,
        imagenURL: productoEditado.imagenURL,
      })
        .then(() => {
          getproductos()
          alert('Se actualizó correctamente');
        })
        .catch((error) => console.error('Error al actualizar producto:', error));
    } else {
      
      Axios.post('http://localhost:8000/productos/registrar', {
        titulo: productoEditado.titulo,
        descripcion: productoEditado.descripcion,
        enlace: productoEditado.enlace,
        imagenURL: productoEditado.imagenURL,
      })
        .then((res) => {
          setProductos([...productos, res.data]);
          alert('Se agregó correctamente');
        })
        .catch((error) => console.error('Error al agregar producto:', error));
    }

    setModoEdicion(false);
    setProductoEditado({
      id: null,
      titulo: '',
      descripcion: '',
      enlace: '',
      imagenURL: '',
    });
  };

  const handleCancelarEdicion = () => {
    setModoEdicion(false);
    setProductoEditado({
      id: null,
      titulo: '',
      descripcion: '',
      enlace: '',
      imagenURL: '',
    });
  };




  return (
    <div>
      <header>
        <HeaderAdmin />
      </header>

      <div className="container mt-4">
        <h2>Tabla de Productos</h2>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Enlace</th>
              <th>Imagen URL</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.idProducto}>
                <td>{producto.idProducto}</td>
                <td>{producto.titulo}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.enlace}</td>
                <td>{producto.imagenURL}</td>
                <td>
                  <button
                    className="btn btn-warning mr-2"
                    onClick={() => handleEditar(producto.idProducto)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleEliminar(producto.idProducto)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {modoAgregar ? null : (
          <button style={{ height: '60px', width: '90px' }} className="btn btn-primary" onClick={() => setModoAgregar(!modoAgregar)}>
            Agregar Producto
          </button>
        )}

        {modoAgregar && (
          <div className="form-container">
            <h2>{modoEdicion ? 'Editar Producto' : 'Agregar Producto'}</h2>
            <label>
              Título:
              <input type="text" onChange={(e) => setTitulo(e.target.value)} />
            </label>
            <label>
              Descripción:
              <input type="text" onChange={(e) => setDescripcion(e.target.value)} />
            </label>
            <label>
              Enlace:
              <input type="text" onChange={(e) => setEnlace(e.target.value)} />
            </label>
            <label>
              Imagen URL:
              <input type="text" onChange={(e) => setImagenURL(e.target.value)} />
            </label>
            <button className="btn btn-success" onClick={handleAgregar}>
              Guardar
            </button>
            <button className="btn btn-secondary" onClick={() => setModoAgregar(!modoAgregar)}>
              Cancelar
            </button>
          </div>
        )}

        {modoEdicion && (
          <div className='EditarProductos'>
            <h2>{modoEdicion ? 'Editar Producto' : 'Agregar Producto'}</h2>
            <label>
              Título:
              <input
                type="text"
                value={productoEditado.titulo}
                onChange={(e) => setProductoEditado({ ...productoEditado, titulo: e.target.value })}
              />
            </label>
            <label>
              Descripción:
              <input
                type="text"
                value={productoEditado.descripcion}
                onChange={(e) =>
                  setProductoEditado({ ...productoEditado, descripcion: e.target.value })
                }
              />
            </label>
            <label>
              Enlace:
              <input
                type="text"
                value={productoEditado.enlace}
                onChange={(e) => setProductoEditado({ ...productoEditado, enlace: e.target.value })}
              />
            </label>
            <label>
              Imagen URL:
              <input
                type="text"
                value={productoEditado.imagenURL}
                onChange={(e) =>
                  setProductoEditado({ ...productoEditado, imagenURL: e.target.value })
                }
              />
            </label>
            <button className="btn btn-success" onClick={handleGuardar}>
              {modoEdicion ? 'Guardar Cambios' : 'Agregar Producto'}
            </button>
            <button className="btn btn-secondary" onClick={handleCancelarEdicion}>
              Cancelar
            </button>
          </div>
        )}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductosAdmin;