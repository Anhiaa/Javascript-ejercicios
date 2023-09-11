var entrada = "anita lava la tina";

document.write("<h2>" + palindrome(entrada) + "</h2>");

function palindrome(entrada) {
    var esPalindrome = true;
    var stringEntrada = entrada.toLowerCase();
    var sinespacios = stringEntrada.replace(/\,*\s/g,"");
    var arreglo = Array.from(sinespacios);
    var k = arreglo.lenght;

    for(let i = 0; i <= arreglo.lenght ; i++) {
        if (arreglo[i] != arreglo[k-1]){
            esPalindrome = false;

        }
        k=k-1;
    }
        return esPalindrome;
    }
