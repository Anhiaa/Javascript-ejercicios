function fibonacci(n) {
    if (n === 0) {
        return 0;      
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function mostrarSerieFibonacci(n) {
    for (let i = 0; i < n; i++){
        console.log(fibonacci(i));
    }
}

//Ejemplo de uso
mostrarSerieFibonacci(10); //Muestra los primeros 10 números de la serie de fibonacci