
class Figura {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    calcularArea() {
      throw new Error('Método calcularArea() debe ser implementado por subclases');
    }
  }
  
  
  class Circulo extends Figura {
    constructor(radio) {
      super('Círculo');
      this.radio = radio;
    }
  
    calcularArea() {
      return Math.PI * this.radio ** 2;
    }
  }
  
  
  class Rectangulo extends Figura {
    constructor(base, altura) {
      super('Rectángulo');
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.base * this.altura;
    }
  }
  
  class Triangulo extends Figura {
    constructor(base, altura) {
      super('Triángulo');
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      return (this.base * this.altura) / 2;
    }
  }
  
 

 
  let figura ;

 figura = new Circulo(5);
  console.log(`El área del ${figura.nombre} es: ${figura.calcularArea().toFixed(2)}`);
  
  
  figura =  new Rectangulo(10, 5);
  console.log(`El área del ${figura.nombre} es: ${figura .calcularArea().toFixed(2)}`);
  

  figura = new Triangulo(10, 5);
  console.log(`El área del ${figura.nombre} es: ${figura.calcularArea().toFixed(2)}`);
  