/* Ejercicio 1: Calculadora de Propinas
- Una app para calcular propinas en restaurantes.
Crea una función calcularPropina(total, porcentaje) que reciba el total de la cuenta y el porcentaje de
propina, y retorne el monto final a pagar (total + propina).*/

function calcularPropina(total, porcentaje){
    let propina = total * (porcentaje / 100);
    return total + propina;
}

console.log(calcularPropina(100000, 30));