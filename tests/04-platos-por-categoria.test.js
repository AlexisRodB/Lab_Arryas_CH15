const test = require("node:test");
const assert = require("node:assert/strict");
const { platosPorCategoria } = require("../ejercicios/04-platos-por-categoria");
const { nuevoMenu } = require("./datos");

function nombres(platos) {
  const lista = [];
  for (let i = 0; i < platos.length; i++) lista.push(platos[i].nombre);
  return lista;
}

test("filtra las bebidas", () => {
  const bebidas = platosPorCategoria(nuevoMenu(), "bebida");
  assert.ok(Array.isArray(bebidas), "platosPorCategoria(menu, \"bebida\") debería retornar un array (¿usaste return?)");
  assert.deepEqual(nombres(bebidas), ["Limonada de coco", "Jugo de lulo"], "platosPorCategoria(menu, \"bebida\") debería retornar la Limonada y el Jugo");
});

test("incluye los platos agotados de esa categoría", () => {
  assert.deepEqual(nombres(platosPorCategoria(nuevoMenu(), "fuerte")), ["Bandeja paisa", "Ajiaco"], "platosPorCategoria(menu, \"fuerte\") debería retornar la Bandeja y el Ajiaco (aquí no se filtra por disponible)");
});

test("las mayúsculas cuentan", () => {
  assert.deepEqual(platosPorCategoria(nuevoMenu(), "Bebida"), [], "platosPorCategoria(menu, \"Bebida\") debería retornar [] (compara con ===)");
});

test("una categoría que no existe retorna un array vacío", () => {
  assert.deepEqual(platosPorCategoria(nuevoMenu(), "sopa"), [], "platosPorCategoria(menu, \"sopa\") debería retornar []");
});

test("no modifica el menú original", () => {
  const menu = nuevoMenu();
  const postres = platosPorCategoria(menu, "postre");
  assert.ok(Array.isArray(postres), "platosPorCategoria(menu, \"postre\") debería retornar un array (¿usaste return?)");
  assert.equal(menu.length, 5, "Después de platosPorCategoria, el menú debería seguir con 5 platos (crea un array nuevo)");
});
