let anio = 2024; //Variable globale
function esBisiesto() {
    if (anio % 4 === 0) {
    if (anio % 100 === 0) {
    if (anio % 400 === 0) {
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
if (esBisiesto()) {
    console.log(anio + " es un año bisiesto.");
} else {
    console.log(anio + "no es un año bisiesto.");
}