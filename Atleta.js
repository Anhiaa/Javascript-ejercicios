class Atleta {
    constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.energia = 100;
    }

    //Metodos o funciones de la clase
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

   var atleta1 = new Atleta('Anhia', 25, 'femenino');
   var atleta2 = new Atleta('Emanuel', 27, 'masculino');
    
   console.log(atleta1);
   console.log(atleta2);

   //Llamada a los métodos
   console.log(atleta1.entrenar(4));
   console.log(atleta1.descansar(3));
   console.log(atleta2.entrenar(6));
   console.log(atleta2.descansar(8));

   console.log(atleta1.celebrar());
   console.log(atleta2.celebrar());