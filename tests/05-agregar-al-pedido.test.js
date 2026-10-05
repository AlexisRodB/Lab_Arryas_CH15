const test = require("node:test");
const assert = require("node:assert/strict");
const { agregarAlPedido } = require("../ejercicios/05-agregar-al-pedido");
const { nuevoMenu } = require("./datos");
const { codigoSinComentarios } = require("./utilidades");

function nuevaCarta() {
  const menu = nuevoMenu();
  return [menu[0], menu[2], menu[3], menu[4]];
}

test("con un número válido retorna el mensaje de agregado", () => {
  assert.equal(agregarAlPedido([], nuevaCarta(), 2), "Agregado: Jugo de lulo", "agregarAlPedido([], carta, 2) debería retornar \"Agregado: Jugo de lulo\"");
});

test("agrega el plato al final del pedido", () => {
  const carta = nuevaCarta();
  const pedido = [carta[0]];
  agregarAlPedido(pedido, carta, 1);
  assert.equal(pedido.length, 2, "Después de agregar, el pedido debería tener 2 platos (¿hiciste push?)");
  assert.equal(pedido[1], carta[1], "El último plato del pedido debería ser la Limonada de coco (push agrega al final)");
});

test("con un número que no existe no agrega nada", () => {
  const pedido = [];
  const mensaje = agregarAlPedido(pedido, nuevaCarta(), 9);
  assert.equal(mensaje, "Ese número no está en la carta", "agregarAlPedido([], carta, 9) debería retornar \"Ese número no está en la carta\"");
  assert.equal(pedido.length, 0, "Con el número 9 el pedido debería seguir vacío (valida antes del push)");
});

test("un número negativo tampoco existe", () => {
  const pedido = [];
  assert.equal(agregarAlPedido(pedido, nuevaCarta(), -1), "Ese número no está en la carta", "agregarAlPedido([], carta, -1) debería retornar \"Ese número no está en la carta\"");
  assert.equal(pedido.length, 0, "Con el número -1 el pedido debería seguir vacío");
});

test("el número 0 es válido", () => {
  assert.equal(agregarAlPedido([], nuevaCarta(), 0), "Agregado: Bandeja paisa", "agregarAlPedido([], carta, 0) debería retornar \"Agregado: Bandeja paisa\" (0 es una posición válida)");
});

test("usa push", () => {
  assert.match(codigoSinComentarios("05-agregar-al-pedido.js"), /\.push\s*\(/, "Tu código debería usar push para agregar el plato (lo pide el enunciado)");
});
