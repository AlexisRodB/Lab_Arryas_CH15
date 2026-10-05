// Menú de prueba de Fogón Andino (el mismo del README).
// Cada test pide una copia nueva para que ningún test afecte a otro.
function nuevoMenu() {
  return [
    { nombre: "Bandeja paisa", precio: 32000, categoria: "fuerte", disponible: true },
    { nombre: "Ajiaco", precio: 28000, categoria: "fuerte", disponible: false },
    { nombre: "Limonada de coco", precio: 9000, categoria: "bebida", disponible: true },
    { nombre: "Jugo de lulo", precio: 7000, categoria: "bebida", disponible: true },
    { nombre: "Postre de natas", precio: 11000, categoria: "postre", disponible: true },
  ];
}

module.exports = { nuevoMenu };
