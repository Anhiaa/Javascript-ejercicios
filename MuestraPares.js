for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue; // saltar a la siguiente iteración si el número es impar
    }
    console.log(i);
}