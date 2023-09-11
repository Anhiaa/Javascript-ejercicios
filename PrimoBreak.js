let num = prompt("Introduce un número para comprobar si es primo:"); //pedir al usuario un número

num = parseInt(num); //Convertir el valor introducido a un número entero
let esPrimo = True;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
    esPrimo = False;
    break; //detener la comprobación si se encuentra un divisor
    }
}
if (esPrimo) {
    console.log(num + " es un número primo.");
} else {
    console.log(num + " no es un número primo.");
}