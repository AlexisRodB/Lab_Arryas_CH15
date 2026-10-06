// ============================================================
// Ejercicio 04 · Platos por categoría
// ============================================================
// El mesero quiere ver solo las bebidas, o solo los postres.
//
// Crea la función platosPorCategoria(menu, categoria) que retorne
// un array NUEVO con los platos cuya categoria sea EXACTAMENTE
// el texto recibido (mayúsculas y tildes cuentan).
//
// Regla: aquí no importa si el plato está disponible o no:
// se filtra solo por categoría.
//
// Ejemplos (con el menú del README):
//   platosPorCategoria(menu, "bebida") → [Limonada de coco, Jugo de lulo]
//   platosPorCategoria(menu, "fuerte") → [Bandeja paisa, Ajiaco]
//   platosPorCategoria(menu, "Bebida") → []   ("Bebida" ≠ "bebida")
//
// Pista: igual que el ejercicio 03, pero la condición usa
// el segundo parámetro y ===.
// ============================================================

function platosPorCategoria(menu, categoria) {
  // Tu código aquí
  const resultado = [];
  for (let i = 0; i < menu.length; i++) {
    const plato = menu[i];
    if (plato.categoria === categoria) {
      resultado.push(plato);
    }
  }
  return resultado;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { platosPorCategoria };
