
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
  
 
  document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let figura = document.getElementById('figura').value;
    let resultado = document.getElementById('resultado');
    let area;

    switch(figura) {
        case 'circulo':
            let radio = parseFloat(document.getElementById('radio').value);
            area = new Circulo(radio).calcularArea();
            break;
        case 'rectangulo':
            let base = parseFloat(document.getElementById('base').value);
            let altura = parseFloat(document.getElementById('altura').value);
            area = new Rectangulo(base, altura).calcularArea();
            break;
        case 'triangulo':
            let base_tri = parseFloat(document.getElementById('base_tri').value);
            let altura_tri = parseFloat(document.getElementById('altura_tri').value);
            area = new Triangulo(base_tri, altura_tri).calcularArea();
            break;
    }

    resultado.innerHTML = `<p>El área de la figura seleccionada es: ${area}</p>`;
});