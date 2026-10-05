const test = require("node:test");
const assert = require("node:assert/strict");
const { cancelarUltimo } = require("../ejercicios/06-cancelar-ultimo");
const { nuevoMenu } = require("./datos");
const { codigoSinComentarios } = require("./utilidades");

test("retorna el nombre del plato cancelado", () => {
  const menu = nuevoMenu();
  assert.equal(cancelarUltimo([menu[0], menu[2]]), "Se canceló: Limonada de coco", "cancelarUltimo([bandeja, limonada]) debería retornar \"Se canceló: Limonada de coco\"");
});

test("quita el último plato del pedido", () => {
  const menu = nuevoMenu();
  const pedido = [menu[0], menu[2]];
  cancelarUltimo(pedido);
  assert.equal(pedido.length, 1, "Después de cancelar, el pedido debería tener 1 plato (¿usaste pop?)");
  assert.equal(pedido[0], menu[0], "El plato que queda debería ser la Bandeja paisa (pop quita el último, no el primero)");
});

test("con un solo plato el pedido queda vacío", () => {
  const menu = nuevoMenu();
  const pedido = [menu[4]];
  assert.equal(cancelarUltimo(pedido), "Se canceló: Postre de natas", "cancelarUltimo([postre]) debería retornar \"Se canceló: Postre de natas\"");
  assert.equal(pedido.length, 0, "Después de cancelar el único plato, el pedido debería quedar vacío");
});

test("con el pedido vacío retorna el aviso", () => {
  const pedido = [];
  assert.equal(cancelarUltimo(pedido), "El pedido está vacío", "cancelarUltimo([]) debería retornar \"El pedido está vacío\" (revisa el length antes del pop)");
});

test("usa pop", () => {
  assert.match(codigoSinComentarios("06-cancelar-ultimo.js"), /\.pop\s*\(/, "Tu código debería usar pop para quitar el último plato (lo pide el enunciado)");
});
