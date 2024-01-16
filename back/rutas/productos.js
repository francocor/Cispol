const { Router } = require("express");
const router = Router();
const {registrar,mostrar,editar,eliminar} = require ("../controladores/productos")






router.put("/editar/:id",editar)
router.delete("/eliminar/:id",eliminar)
router.get("/",mostrar)
router.post("/registrar",registrar)

module.exports=router;