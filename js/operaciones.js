
class Figura {
  constructor(nombre, base, altura) {
    this.nombre = nombre;
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    throw new Error('Método calcularArea() debe ser implementado por subclases');
  }
}

class Circulo extends Figura {
  constructor(radio) {
    super('Círculo', null, null); 
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio ** 2;
  }
}

class Rectangulo extends Figura {
  constructor(base, altura) {
    super('Rectángulo', base, altura);
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

class Triangulo extends Figura {
  constructor(base, altura) {
    super('Triángulo', base, altura);
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }
}

  
 
