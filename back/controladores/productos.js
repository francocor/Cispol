const { db } = require("../database/config");

/*const registrar = (req, res) => {
    const {titulo, descripcion, enlace, imagenURL} = req.body
    db.query(
        "INSERT INTO Productos (titulo,descripcion,enlace,imagenURL) values(?,?,?,?)",
        [
            titulo,
            descripcion,
            enlace,
            imagenURL
        ],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )};*/
    const mostrar = (req, res) => {
      db.query("SELECT * FROM Productos;", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    };
    
    const registrar = (req, res) => {

        const {titulo, descripcion, enlace, imagenURL} = req.body 
      
        db.query(
            `CALL registarProductos("${titulo}", "${descripcion}", "${enlace}", "${imagenURL}" )`
            ,
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
        );
      };


      const editar = (req, res) => {
        const idProducto = req.params.id;
        const {
           
          titulo,
          descripcion,
          enlace,
          imagenURL
        } = req.body;
      
        db.query(
            `call EditarProducto (${idProducto},"${titulo}", "${descripcion}","${enlace}","${imagenURL}")`,
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
        );
      };

      const eliminar = (req, res) => {
  
        const  idProducto = req.params.id;
      
        db.query(`call EliminarProducto(${idProducto}) ` , (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });
      };





module.exports = { registrar,mostrar,editar,eliminar};