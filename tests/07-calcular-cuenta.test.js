const test = require("node:test");
const assert = require("node:assert/strict");
const { calcularCuenta } = require("../ejercicios/07-calcular-cuenta");
const { nuevoMenu } = require("./datos");

test("cobra dos platos con IVA", () => {
  const menu = nuevoMenu();
  assert.equal(calcularCuenta([menu[0], menu[2]]), 48790, "calcularCuenta([bandeja, limonada]) debería retornar 48790 (41000 + 7790 de IVA)");
});

test("cobra tres platos con IVA", () => {
  const menu = nuevoMenu();
  assert.equal(calcularCuenta([menu[0], menu[2], menu[3]]), 57120, "calcularCuenta([bandeja, limonada, jugo]) debería retornar 57120");
});

test("cobra un solo plato", () => {
  const menu = nuevoMenu();
  assert.equal(calcularCuenta([menu[3]]), 8330, "calcularCuenta([jugo]) debería retornar 8330 (7000 + 1330)");
});

test("redondea el resultado", () => {
  assert.equal(calcularCuenta([{ nombre: "Pandebono", precio: 1250 }]), 1488, "calcularCuenta([{ precio: 1250 }]) debería retornar 1488 (1487.5 con Math.round)");
});

test("un pedido vacío cuesta 0", () => {
  assert.equal(calcularCuenta([]), 0, "calcularCuenta([]) debería retornar 0 (¿iniciaste tu acumulador en 0?)");
});
