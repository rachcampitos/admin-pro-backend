/* Ruta: /api/usuario */

const { Router } = require("express");

const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");
const {
  validarJWT,
  validarAdminRole,
  validarAdminRole_o_SameUSer,
} = require("../middlewares/validar-jwt");

const {
  getUsuarios,
  crearUsuarios,
  actualizarUsuario,
  borrarUsuario,
} = require("../controllers/usuarios");

const router = Router();
router.get("/", getUsuarios);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    validarCampos,
  ],
  crearUsuarios
);
router.put(
  "/:id",
  [
    validarJWT,
    validarAdminRole_o_SameUSer,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("role", "El role es obligatorio").isEmail(),
  ],
  actualizarUsuario
);
router.delete("/:id", validarJWT, validarAdminRole, borrarUsuario);
module.exports = router;
