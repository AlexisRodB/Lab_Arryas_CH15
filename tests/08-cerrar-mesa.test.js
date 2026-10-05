const test = require("node:test");
const assert = require("node:assert/strict");
const { cerrarMesa } = require("../ejercicios/08-cerrar-mesa");
const { nuevoMenu } = require("./datos");
const { codigoSinComentarios } = require("./utilidades");

test("cierra una mesa con dos platos", () => {
  assert.deepEqual(cerrarMesa(nuevoMenu(), [0, 1]), { cantidadPlatos: 2, total: 48790 }, "cerrarMesa(menu, [0, 1]) debería retornar { cantidadPlatos: 2, total: 48790 }");
});

test("los números se buscan en la carta del día, no en el menú", () => {
  assert.deepEqual(cerrarMesa(nuevoMenu(), [3, 3]), { cantidadPlatos: 2, total: 26180 }, "cerrarMesa(menu, [3, 3]) debería retornar { cantidadPlatos: 2, total: 26180 } (la posición 3 de la carta es el Postre de natas)");
});

test("ignora los números que no están en la carta", () => {
  assert.deepEqual(cerrarMesa(nuevoMenu(), [0, 9]), { cantidadPlatos: 1, total: 38080 }, "cerrarMesa(menu, [0, 9]) debería retornar { cantidadPlatos: 1, total: 38080 }");
});

test("sin números la mesa no debe nada", () => {
  assert.deepEqual(cerrarMesa(nuevoMenu(), []), { cantidadPlatos: 0, total: 0 }, "cerrarMesa(menu, []) debería retornar { cantidadPlatos: 0, total: 0 }");
});

test("reutiliza las funciones de los ejercicios 03, 05 y 07", () => {
  const codigo = codigoSinComentarios("08-cerrar-mesa.js");
  for (const funcion of ["soloDisponibles", "agregarAlPedido", "calcularCuenta"]) {
    assert.match(codigo, new RegExp(funcion + "\\s*\\("), "Tu código debería llamar a " + funcion + "(...) en vez de repetir ciclos");
  }
});
