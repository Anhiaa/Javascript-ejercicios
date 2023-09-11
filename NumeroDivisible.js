//Pedir al usuario un número
let numero = parseInt(prompt("Por favor, ingrese un número:"));

//Comprobar si el número es divisible por 3 o por 5
if(numero % 3 === 0 || numero % 5 === 0) {
    alert("El número es divisible por 3 o por 5.");
} else {
    alert("El número no es divisible por 3 o por 5.");
}