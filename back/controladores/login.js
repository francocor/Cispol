const { db } = require("../database/config");
const axios = require('axios')

const mostrar = (req, res) => {
  db.query("SELECT * FROM usuarios;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

/*const mostrarUno = (req, res) => {
  const { id } = req.params;

  db.query(
    SELECT * FROM login WHERE id_User = ${id},
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};*/
const login = async (req,res) =>{
  //console.log(req.body);
  const usuario = req.body.usuario
  const contraseña = req.body.contraseña 
  try {
    const response = await axios.get('http://localhost:8000/login');
    const usuarios = response.data;

    const verifiedData = usuarios.some(user => user.username === usuario && user.hashed_password === contraseña);

    if (verifiedData) {
      let nDatos = {usuario,contraseña}
      res.status(200).json(nDatos)
    }else {
      res.status(400).send("credenciales incorrectas")
    }
  } catch (error) {
    console.error(error);
  }
}

const registrar = (req, res) => {

  const {usuario, email, contraseña, salt} = req.body 

  db.query(
      `CALL crearUsuario("${usuario}", "${email}", "${contraseña}", "${salt}" )`
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
    const id_usuario = req.params.id;
    const {
       
      usuario,
      contraseña,
      email,
      salt
    } = req.body;
  
    db.query(
        `call modificarUsuario (${id_usuario}, "${usuario}","${email}","${contraseña}","${salt}")`,
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
  
    const  id_usuario = req.params.id;
  
    db.query(`call eliminarUsuario(${id_usuario}) ` , (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  };
  
  module.exports = { mostrar,registrar, editar, eliminar, login };