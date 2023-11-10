/**
 * Módulo de la Calculadora que realiza operaciones matemáticas básicas.
 * @module Calculadora
 */

/**
 * Realiza una suma entre dos números.
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} El resultado de la suma.
 */
function sumar(a, b) {
  return a + b;
}

/**
 * Realiza una resta entre dos números.
 * @param {number} a - El número del cual se resta.
 * @param {number} b - El número a restar.
 * @returns {number} El resultado de la resta.
 */
function restar(a, b) {
  return a - b;
}

/**
 * Realiza una multiplicación entre dos números.
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} El resultado de la multiplicación.
 */
function multiplicar(a, b) {
  return a * b;
}

/**
 * Realiza una división entre dos números.
 * @param {number} a - El número que se divide.
 * @param {number} b - El divisor.
 * @returns {number} El resultado de la división.
 */
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero.");
  }
  return a / b;
}

// Exportar las funciones para su uso en otros módulos.
module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir
};
