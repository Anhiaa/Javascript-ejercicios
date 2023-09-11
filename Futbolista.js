class Atleta {
    constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.energia = 100;
    }
}

class Futbolista extends Atleta {
    constructor(nombre, edad, genero, equipo, posicion) {
        super(nombre, edad, genero);
        this.equipo = equipo;
        this.posicion = posicion;
    }

    celebrar() {
        return this.nombre + ' está celebrando su victoria como futbolista';
    }
}

var futbolista1 = new Futbolista('Ernesto', 58, 'masculino', 'PSG', 'delantero');
var Futbolista2 = new Futbolista('Alexis Vega', 25, 'masculino', 'Chivas', 'delantero');

console.log(futbolista1);
console.log(Futbolista2);

console.log(futbolista1.celebrar());
console.log(Futbolista2.celebrar());