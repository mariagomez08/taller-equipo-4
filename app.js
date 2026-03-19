/* Ejercicio 1: Calculadora de Propinas
- Una app para calcular propinas en restaurantes.
Crea una función calcularPropina(total, porcentaje) que reciba el total de la cuenta y el porcentaje de
propina, y retorne el monto final a pagar (total + propina).*/

const prompt = require('prompt-sync')();
 
let total1 = parseFloat(prompt("Ingrese el total de la cuenta: "))
let porcentaje1 = parseFloat(prompt("Ingrese el porcentaje de la propina: "))


function calcularPropina(total, porcentaje){

    let propina = total * (porcentaje / 100);
    return total + propina;
}

console.log(calcularPropina(total1, porcentaje1));


/*Ejercicio 2: Validar Contraseña
- Formulario de registro.
Crea una función validarContraseña(contraseña) que retorne true si:
- Tiene al menos 8 caracteres.
- Incluye un número.
- Incluye una mayúscula.*/

const contrasenia= prompt("Ingrese una contraseña:")

function validacion (texto) {
    let tieneMayuscula = false;
    let tieneNumero = false
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (caracter >= 'A' && caracter <= 'Z') {
            tieneMayuscula = true;
        }
        if (caracter >= '0' && caracter <= '9') {
            tieneNumero = true;
        }
    }
    return tieneMayuscula && tieneNumero
}
function validarContraseña (contrasenia) {
    if (contrasenia.length >= 8 &&  validacion(contrasenia)){
        return true
    } else {
        return false
    }
}
const resultado = validarContraseña(contrasenia)
console.log(resultado) 

/*
3- Sistema de gestión de inventario.
Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no. El
inventario debería estar PREDEFINIDO
ejemplo:
const inventario = [
 { nombre: "Camisa", precio: 20 },
 { nombre: "Zapatos", precio: 50 }
];
*/ 

let nombre = prompt("Ingrese el producto: ");

const inventario = [
 { nombre: "Camisa", precio: 20 },
 { nombre: "Zapatos", precio: 50 }
]

function buscarProducto(nombre, inventario) {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            return `El producto ${inventario[i].nombre} existe.`;
        }
    }
    return "Producto no encontrado";
}

console.log(buscarProducto(nombre, inventario));

/*
Ejercicio 4: Calcular Promedio de Notas
- Plataforma educativa.
Crea una función calcularPromedio(notas) que reciba un array de notas dado por el usuario
(separadas por comas) y retorne el promedio (redondeado a 2 decimales).


*/
const readline = require("readline-sync");
let cantidadNotas = Number(readline.question(" Ingresa las notas que quieres probar: "));
let notas = [];
for (let i = 0; i < cantidadNotas; i++) {
    let nota = Number(readline.question(`Ingresa la nota : `));
    notas.push(nota);
}
function promedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}
let promedioFinal = promedio(notas);
console.log("Promedio:", promedioFinal);

/*
Ejercicio 5: Filtrar Usuarios por Edad- Red social.
Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función
filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la
cual será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas de la lsita
cumplen con tener más de 18.*/

usuarios =[{ nombre: "Ana", edad: 25 }, {nombre: "Maria", edad: 18}, {nombre: "Luis", edad: 12} ]
let listas =[];
edadMinima = parseInt(prompt("Ingrese la edad minima: "))
function filtrarUsuarios(usuarios, edadMinima){
    for (let i = 0; i < usuarios.length; i++){
        if(usuarios[i].edad >= edadMinima){
            listas.push(usuarios[i].nombre) + usuarios[i].edad;
 
        }
    }
 
   return listas;
}
 
console.log(filtrarUsuarios(usuarios, edadMinima));
/*
Ejercicio 6: Contador de Palabras
-Editor de texto.
Crea una función contarPalabras(texto) que retorne el número de palabras en un string (separadas por
espacios).

*/
texto = prompt("Ingrese una frase: ")
function contarPalabras(texto) {
    return texto.split(" ")
}
let nueva_Palabra = contarPalabras(texto)
console.log("El string tiene ", nueva_Palabra.length, "palabras")

/*
Ejercicio 7: Simulador de Cajero Automático
-App bancaria.
Crea una función retirarDinero(saldo, monto) que:
Pide al usuario su saldo actual y el monto a retirar.
Muestra el nuevo saldo o "Fondos insuficientes".

*/

let saldo= parseFloat(prompt("Ingrese su saldo actual: "))
let monto= parseFloat(prompt("Ingrese el monto a retirar: "))
function retirarDinero(saldo, monto) {
    nuevo_Saldo= saldo - monto
    if (nuevo_Saldo<0){
        console.log("Fondos insuficientes")
    } else {
        console.log(nuevo_Saldo)
    }
}
retirarDinero(saldo, monto)

/*
Ejercicio 8: Cambio de Moneda
-App de viajes.
Crea una función convertirMoneda(monto, monedaDestino) que convierta de pesos a USD o EUR,
pedir al usuario monto en COP y la moneda con la que desea hacer la converción.
*/
 
monto = parseFloat(prompt("Ingresa el monto: "))
monedaDestino = prompt("Ingresa USD o EUR para comvertoir: ")
function convertirMoneda(monto, monedaDestino){
      const usd = 4200
      const eur = 4600
      if (monedaDestino.toLowerCase() === "usd"){
        monto_usd = monto / usd;
        return `${monto}  equivale a:  ${monto_usd}  usd;`
      }else if (monedaDestino.toLowerCase() === "eur"){
        monto_eur = monto / eur;
       return `${monto}  equivale a:  ${monto_eur}  eur;`
      }else{
        return "moneda no valida";
      }
 
 
}
 
console.log(convertirMoneda(monto, monedaDestino))