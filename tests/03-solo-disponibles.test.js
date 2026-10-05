const test = require("node:test");
const assert = require("node:assert/strict");
const { soloDisponibles } = require("../ejercicios/03-solo-disponibles");
const { nuevoMenu } = require("./datos");

function nombres(platos) {
  const lista = [];
  for (let i = 0; i < platos.length; i++) lista.push(platos[i].nombre);
  return lista;
}

test("deja solo los 4 platos disponibles, en orden", () => {
  const carta = soloDisponibles(nuevoMenu());
  assert.ok(Array.isArray(carta), "soloDisponibles(menu) debería retornar un array (¿usaste return?)");
  assert.deepEqual(nombres(carta), ["Bandeja paisa", "Limonada de coco", "Jugo de lulo", "Postre de natas"], "soloDisponibles(menu) debería retornar los 4 platos disponibles (el Ajiaco está agotado)");
});

test("retorna los objetos completos del menú", () => {
  const menu = nuevoMenu();
  const carta = soloDisponibles(menu);
  assert.equal(carta[1], menu[2], "soloDisponibles(menu)[1] debería ser el mismo objeto de la Limonada de coco (haz push del plato completo, no solo del nombre)");
});

test("no modifica el menú original", () => {
  const menu = nuevoMenu();
  const carta = soloDisponibles(menu);
  assert.ok(Array.isArray(carta), "soloDisponibles(menu) debería retornar un array (¿usaste return?)");
  assert.equal(menu.length, 5, "Después de soloDisponibles(menu), el menú debería seguir con 5 platos (crea un array nuevo)");
});

test("si todo está agotado retorna un array vacío", () => {
  const agotados = [{ nombre: "Ajiaco", precio: 28000, categoria: "fuerte", disponible: false }];
  assert.deepEqual(soloDisponibles(agotados), [], "soloDisponibles con todo agotado debería retornar []");
});

test("con el menú vacío retorna un array vacío", () => {
  assert.deepEqual(soloDisponibles([]), [], "soloDisponibles([]) debería retornar []");
});
