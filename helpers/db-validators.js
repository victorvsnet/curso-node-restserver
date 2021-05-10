const role = require("../models/role");
const { Categoria, Usuario, Producto } = require("../models");

const esRoleValido = async (rol = "") => {
  const existeRol = await role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no esta registrado en la BD`);
  }
};

const emailExiste = async (correo = "") => {
  // verificar si el correo existe
  const existeEmail = await usuario.findOne({ correo });
  if (existeEmail) {
    throw new Error(`El correo: ${correo}, ya está registrado`);
  }
};

/**
 * Usuario: Verifica si el usuario a buscar existe por el Id enviado desde el Front
 */
const existeUsuarioPorId = async (id) => {
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario) {
    throw new Error(`El id: ${id}, no existe`);
  }
};

/**
 *  Categorias: Valida si existe la categoria a buscar por el Id enviado desde el Front
 */
const existeCategoriaPorId = async (id) => {
  const existeCategoria = await Categoria.findById(id);
  if (!existeCategoria) {
    throw new Error(`El id: ${id}, no existe`);
  }
};

/**
 *  Productos: Valida si existe el producto a buscar por el Id enviado desde el Front
 */
const existeProductoPorId = async (id) => {
  const existeProducto = await Producto.findById(id);
  if (!existeProducto) {
    throw new Error(`El id: ${id}, no existe`);
  }
};

/**
 * Validar colecciones permitidas
 */
const coleccionesPermitidas = (coleccion = "", colecciones = []) => {
  const incluida = colecciones.includes(coleccion);
  if (!incluida) {
    throw new Error(
      `La coleccion ${coleccion} no es permitida. Lista permitida: ${colecciones}`
    );
  }
  return true;
};

module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId,
  existeCategoriaPorId,
  existeProductoPorId,
  coleccionesPermitidas,
};
