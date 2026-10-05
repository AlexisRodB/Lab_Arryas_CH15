const test = require("node:test");
const assert = require("node:assert/strict");
const { describirPlato } = require("../ejercicios/01-acceso-a-un-plato");
const { nuevoMenu } = require("./datos");

test("describe el primer plato (posición 0)", () => {
  assert.equal(describirPlato(nuevoMenu(), 0), "Bandeja paisa · $32000", "describirPlato(menu, 0) debería retornar \"Bandeja paisa · $32000\" (las posiciones empiezan en 0)");
});

test("describe el último plato (posición 4)", () => {
  assert.equal(describirPlato(nuevoMenu(), 4), "Postre de natas · $11000", "describirPlato(menu, 4) debería retornar \"Postre de natas · $11000\"");
});

test("describe un plato agotado igual que los demás", () => {
  assert.equal(describirPlato(nuevoMenu(), 1), "Ajiaco · $28000", "describirPlato(menu, 1) debería retornar \"Ajiaco · $28000\" (aquí no importa si está disponible)");
});

test("una posición que no existe retorna el aviso", () => {
  assert.equal(describirPlato(nuevoMenu(), 9), "Ese plato no existe", "describirPlato(menu, 9) debería retornar \"Ese plato no existe\" (¿revisaste si menu[posicion] es undefined?)");
});

test("con el menú vacío retorna el aviso", () => {
  assert.equal(describirPlato([], 0), "Ese plato no existe", "describirPlato([], 0) debería retornar \"Ese plato no existe\"");
});
