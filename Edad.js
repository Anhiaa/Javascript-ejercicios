//Pedir el nombre, apellido y edad del usuario
var nombre = prompt("Por favor, ingresa tu nombre");
var apellido = prompt("Por favor, ingresa tu apellido");
var edad = parseInt(prompt("Por favor, ingresa tu edad:"));

// Calcular la edad dentro de 10 años
var edadEn10años = edad + 10;

//Mostrar el saludo yla edad dentro de 10 años
alert("¡Hola " + nombre + " " + apellido + " ! Tendrás " + edadEn10años + " años en 10 años más.");
