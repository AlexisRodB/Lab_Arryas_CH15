const test = require("node:test");
const assert = require("node:assert/strict");
const { cartaNumerada } = require("../ejercicios/02-carta-numerada");
const { nuevoMenu } = require("./datos");

test("retorna una línea por plato", () => {
  const carta = cartaNumerada(nuevoMenu());
  assert.ok(Array.isArray(carta), "cartaNumerada(menu) debería retornar un array (¿usaste return?)");
  assert.equal(carta.length, 5, "cartaNumerada(menu) debería retornar 5 líneas");
});

test("la primera línea empieza en 0", () => {
  assert.equal(cartaNumerada(nuevoMenu())[0], "0. Bandeja paisa · $32000", "cartaNumerada(menu)[0] debería ser \"0. Bandeja paisa · $32000\" (revisa el punto, los espacios y el ·)");
});

test("la carta completa sale en orden", () => {
  assert.deepEqual(
    cartaNumerada(nuevoMenu()),
    [
      "0. Bandeja paisa · $32000",
      "1. Ajiaco · $28000",
      "2. Limonada de coco · $9000",
      "3. Jugo de lulo · $7000",
      "4. Postre de natas · $11000",
    ],
    "cartaNumerada(menu) debería retornar las 5 líneas en el orden del menú"
  );
});

test("con el menú vacío retorna un array vacío", () => {
  assert.deepEqual(cartaNumerada([]), [], "cartaNumerada([]) debería retornar []");
});

test("no modifica el menú original", () => {
  const menu = nuevoMenu();
  const carta = cartaNumerada(menu);
  assert.ok(Array.isArray(carta), "cartaNumerada(menu) debería retornar un array (¿usaste return?)");
  assert.equal(menu.length, 5, "Después de cartaNumerada(menu), el menú debería seguir con 5 platos");
  assert.equal(typeof menu[0], "object", "El menú debería seguir guardando objetos, no textos (crea un array nuevo)");
});
