//Pedir al usuario un número
let numero = parseInt(prompt("Por favor, ingresa un número:"));

//Comprobar si el número está en el rango del 1 al 100
if (numero >= 1 && numero <= 100) {
    alert("El número está en el rango del 1 al 100.");
} else {
    alert("El número no está en el rango del 1 al 100.");
}