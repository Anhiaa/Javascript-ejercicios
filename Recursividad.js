function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num-1);
    }
}

//Ejemplo de uso
console.log(factorial(5)); //Muestra 120