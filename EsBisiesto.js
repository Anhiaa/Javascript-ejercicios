function esBisiesto(anio) {
    if (anio % 4 === 0) {
    if (anio % 100 === 0) {
    if (anio %  400 === 0) {
       return true;
    } else {
       return false; 
    }  
    } else {
        return true;
    }
    } else {
        return false;
    }
}
let anio = 2024; // El año que quieres comprobar
if (esBisiesto(anio)) {
    console.log(anio + " es un año bisiesto.");
} else {
    console.log(anio + "no es un año bisiesto.");
}