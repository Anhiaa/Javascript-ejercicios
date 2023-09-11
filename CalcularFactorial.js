//Calcular La factorial de un numero
// 5! = 1 * 2 * 3 * 4 * 5 = 120
// 1! = 1
// 0! = 1

function factorialRecursivo(n) {
    if(n == 0) {
        return 1;
    } else {
        return n * factorialRecursivo(n - 1);
    }
}
console.log(factorialRecursivo(5)); //120


