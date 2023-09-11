let mes = 2; // número del mes (1 = enero, 2 = febrero, etc)

switch (mes) {


    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
    console.log("Este mes tiene 31 días");
break; 
    case 2:
    console.log("Este mes tiene 28 o 29 días");
break;
default:
    console.log("Introduce un número de mes valido.");
}

