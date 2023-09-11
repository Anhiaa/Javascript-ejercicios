function factorial(num) {
let resultado = 1;
for (let i = 1; i <= num; i++) {
    resultado *= i;
}
return resultado;
}

//Ejemplo de uso
console.log(factorial(5)); //Muestra 120