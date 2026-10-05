// ============================================================
// Ejercicio 08 · Cerrar la mesa (integrador)
// ============================================================
// Al final del turno, el sistema recibe el menú y la lista de
// números que dictó el mesero (posiciones de la CARTA DEL DÍA).
//
// Crea la función cerrarMesa(menu, numeros) que:
//   1. Arme la carta del día con soloDisponibles (ejercicio 03).
//   2. Cree un pedido vacío y, por cada número, llame a
//      agregarAlPedido (ejercicio 05). Los números inválidos se ignoran solos.
//   3. Retorne un objeto con dos propiedades:
//        cantidadPlatos → cuántos platos quedaron en el pedido
//        total          → calcularCuenta(pedido) (ejercicio 07)
//
// Ejemplos (con el menú del README):
//   cerrarMesa(menu, [0, 1])    → { cantidadPlatos: 2, total: 48790 }
//   cerrarMesa(menu, [0, 9])    → { cantidadPlatos: 1, total: 38080 }
//   cerrarMesa(menu, [])        → { cantidadPlatos: 0, total: 0 }
//
// Pista: no repitas ciclos de filtro ni de suma: llama a tus funciones.
// ============================================================

// Estas líneas traen tus funciones de los ejercicios 03, 05 y 07
const { soloDisponibles } = require("./03-solo-disponibles");
const { agregarAlPedido } = require("./05-agregar-al-pedido");
const { calcularCuenta } = require("./07-calcular-cuenta");

function cerrarMesa(menu, numeros) {
  // Tu código aquí
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { cerrarMesa };
