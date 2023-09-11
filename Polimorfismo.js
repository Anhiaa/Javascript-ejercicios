class Atleta {
    constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.energia = 100;
    }

    entrenar(horas){
        this.energia -= horas*5;
        return this.nombre + ' entrenó durante: ' + horas + ' horas. Energia actual: ' + this.energia;
    }

    descansar(horas){
        this.energia +=horas*3;
        return this.nombre + ' descansó durante: ' + horas + ' horas. Energia actual: ' + this.energia;
    }

    celebrar(){
        return this.nombre + " está celebrando su victoria";
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

class Tenista extends Atleta {
    constructor(nombre, edad, genero, GrandSlams) {
    super(nombre, edad, genero);
    this.GrandSlams = GrandSlams;
    }

    celebrar() {
        return this.nombre + ' está celebrando su victoria como tenista';
    } 
}

const atleta1 = new Atleta('Juan', 25, 'masculino');
atleta1.entrenar(2);
atleta1.descansar(1);
atleta1.celebrar();

const futbolista1 = new Futbolista('Lionel Messi', 34, 'masculino', 'Barcelona', 'delantero');
futbolista1.entrenar(3);
futbolista1.descansar(1);
futbolista1.celebrar();

const tenista1 = new Tenista('Novak Djokovic', 34, 'masculino', 20);
tenista1.entrenar(4);
tenista1.descansar(3);
tenista1.celebrar();

console.log(atleta1);
console.log(atleta1.celebrar());

console.log(futbolista1);
console.log(futbolista1.celebrar());

console.log(tenista1);
console.log(tenista1.celebrar());