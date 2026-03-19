/* Ejercicio 1: Calculadora de Propinas
- Una app para calcular propinas en restaurantes.
Crea una función calcularPropina(total, porcentaje) que reciba el total de la cuenta y el porcentaje de
propina, y retorne el monto final a pagar (total + propina).*/

const prompt = require('prompt-sync')();
 /*
let total1 = parseFloat(prompt("Ingrese el total de la cuenta: "))
let porcentaje1 = parseFloat(prompt("Ingrese el porcentaje de la propina: "))


function calcularPropina(total, porcentaje){

    let propina = total * (porcentaje / 100);
    return total + propina;
}

console.log(calcularPropina(total1, porcentaje1));
*/

/*Ejercicio 2: Validar Contraseña
- Formulario de registro.
Crea una función validarContraseña(contraseña) que retorne true si:
- Tiene al menos 8 caracteres.
- Incluye un número.
- Incluye una mayúscula.*/

let password = prompt("Ingrese la contraseña: ");

function validarContrasena(password){
    for (let i = 0 ; i < password.length ; i++  ){
        let password_length = password[i];
        if (password.length >= 8 ){
            console.log("Tiene mas de 8 caracsteres")
            if (/\d/.test(password_length)) {
                console.log("Tiene numeros"); 
            }
        }else{
            console.log("Tiene que tener mas de 8 caracteres.")
        }

    }

}

validarContrasena(password);    
