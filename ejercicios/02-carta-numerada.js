// ============================================================
// Ejercicio 02 · Carta numerada
// ============================================================
// El restaurante quiere imprimir la carta con un número por plato.
// La función NO imprime: entrega las líneas listas para usar.
//
// Crea la función cartaNumerada(menu) que retorne un array NUEVO
// de textos, uno por plato y en el mismo orden, con este formato:
//   "0. Bandeja paisa · $32000"
// El número es la posición del plato en el menú (empieza en 0).
//
// Ejemplos:
//   cartaNumerada(menu)[0] → "0. Bandeja paisa · $32000"
//   cartaNumerada(menu)[1] → "1. Ajiaco · $28000"
//   cartaNumerada([])      → []
//
// Pista: arreglo vacío → for → push de un texto → return al final.
// ============================================================

function cartaNumerada(menu) {
  // Tu código aquí
  const resultado = [];
  for (let i = 0; i < menu.length; i++) {
    const plato = menu[i];
    resultado.push(`${i}. ${plato.nombre} · $${plato.precio}`);
  }
  return resultado;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { cartaNumerada };
