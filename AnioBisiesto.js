//Pedir al usuario un año 
let year = parseInt(prompt("Por favor, ingresa un año:"));

//Comprobar si el año es bisiesto
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert("El año es bisiesto.");
} else {
    alert("El año no es bisiesto.");
}
