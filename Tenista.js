class Atleta {
    constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.energia = 100;
    }
}

class Tenista extends Atleta {
    constructor(nombre, edad, genero, GrandSlams) {
    super(nombre, edad, genero);
    this.GrandSlams = GrandSlams;
    }

    celebrar() {
        return this.nombre + ' está celebrando su victoria como tenista';
    } 
}

var tenista1 = new Tenista('Rafael Nadal', 37, 'masculino', 22);
var tenista2 = new Tenista('Roger Federer', 42, 'masculino', 20);

console.log(tenista1);
console.log(tenista2);

console.log(tenista1.celebrar());
console.log(tenista2.celebrar());