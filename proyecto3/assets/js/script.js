document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/data/personajes.json')
      .then(response => response.json())
      .then(data => {
        mostrarPersonajes(data);
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  
    // Función para mostrar los personajes 
    
    function mostrarPersonajes(personajes) {
      const container = document.getElementById('characters-container');
      container.innerHTML = '';
  
      personajes.forEach(personaje => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
          <div class="card mb-4">
            <img src="${personaje.imagen}" class="card-img-top" alt="${personaje.nombre}">
            <div class="card-body">
              <h5 class="card-title">${personaje.nombre}</h5>
              <p class="card-text"><strong>Edad:</strong> ${personaje.edad}</p>
              <p class="card-text"><strong>Ocupación:</strong> ${personaje.ocupacion}</p>
              <p class="card-text"><strong>Familia:</strong> ${personaje.familia}</p>
              <p class="card-text">${personaje.descripcion}</p>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }
  
    // Función de búsqueda
    
    document.getElementById('buscar').addEventListener('input', event => {
      const searchTerm = event.target.value.toLowerCase();
      fetch('assets/data/personajes.json')
        .then(response => response.json())
        .then(data => {
          const personajesFiltrados = data.filter(personaje =>
            personaje.nombre.toLowerCase().includes(searchTerm) ||
            personaje.descripcion.toLowerCase().includes(searchTerm)
          );
          mostrarPersonajes(personajesFiltrados);
        })
        .catch(error => console.error('Error al cargar los datos:', error));
    });
});
  

/*
//Metodo IndexOf & LastIndexOf & Includes

let frutas = ["manzana", "banana", "cereza", "durazno", "banana", "fresa", "mandarina","papaya"]; //Array que almacena elementos 

let frutaBuscada = "papaya"; //Especificamos el elemento que vamos a buscar

console.log(frutas.indexOf(frutaBuscada)); //Realiza la busqueda del elemento de izquierda a derecha e imprime su indice
console.log(frutas.lastIndexOf(frutaBuscada)); //Realiza la busqueda del elemento de derecha a izquierda e imprime su indice
console.log(frutas.lastIndexOf(frutaBuscada,2)); //Realiza la busqueda del elemento repetido e imprime su indice

console.log(frutas.includes(frutaBuscada)); //Realiza la busqueda del elemento, e imprime un valor booleano (true/false)


//Metodo map

const numbers = [1,2,3];
const multiplicacion = numbers.map(x => x * 2);

console.log(multiplicacion);

const nombres = ['rocio', 'maribel', 'jimena'];
const mayusculas = nombres.map(function(nombres){
    return nombres.toUpperCase();
});

console.log(mayusculas);

//Metodo Reduce

const n = [1,2,3,4,5];
const reducido = n.reduce(function(a,b){
    return a + b;
});

console.log(reducido);

const names = ['Deya', 'Ericka', 'Jazmin'];
const name_reduce = names.reduce(function(valor, valorActual){
    return valor + ", " + valorActual;
});

console.log(name_reduce);

//Metodo Sort

let numeros = [3, 1, 10, 35, 2, 21];
console.log(numeros.sort(function(a,b){
    return a - b;
}));

//Metodo Reverse

const a = [1,2,3,4,5,6];
a.reverse();

console.log(a);

//Metodo Split

var saludo = "Hola mundo. Cómo estas hoy?";
var fragmentado = saludo.split(" ",5);

console.log(fragmentado);

//Metodo Join

var clima = ['lluvioso', 'soleado', 'templado'];
var tiempo = clima.join();
var tiempo2 = clima.join(', ');
var tiempo3 = clima.join(' + ');

console.log(tiempo2); */


/*class Pila{

  // creamos un constructor
  constructor(){
     this.Pila=[];
  }
  //definicion del metodo para agregar elementos a la pila
  push(elemento){
     this.Pila.push(elemento);
     return this.Pila;

  }
  // definir metodo pop para eliminar elementos de la pila
  pop(){
     return this.Pila.pop();

  }
  //define el ultimo valor agregado a la pila, 'sin sacarlo'

  peek(){
      return this.Pila[this.Pila.length-1];
  }

  //define la longitud de mis elemntos
  size(){
     return this.Pila.length;
  }

  // mostrar el contenido de la pila
  print (){
     console.log(this.Pila);
  }
}
const pila= new Pila ();
console.log (pila.size);
console.log (pila.push('Teresa'));
console.log (pila.push('Alisson'));
console.log (pila.push('Maripel'));
console.log (pila.push('Helba'));
pila.pop();
pila.print();
console.log (pila.peek());

// EStructura de datos Cola

class Cola{
   //creamos el constructor
   constructor(){
      this.cola=[];

   }
   // definimos el metodo parea agregar elementos
   Enqueue(elemento){
     this.cola.push(elemento);
     return this.cola;
   }

   //creamos un metodo para eliminar el primer elemento de la cola
   Dequeue(){
     return this.cola.shift();
   }

   // definimos un metodo para observar el primer elemento de nuestra cola
   peek(){ 
      return this.cola[0];
   }

   //definimos un metodo para observar los elemntos almacenados
    size(){
      return this.cola.length;
    }

    //creamos un metodo para observar si hay elementos en la cola
    isEmpt(){
      return this.cola.length===0;

    }
    //imprime el array cola
    print(){
       return console.log(this.cola);
    }


}
const cola = new Cola();

console.log(cola.Enqueue('alisson'));
console.log(cola.Enqueue('lola'));
console.log(cola.Enqueue('lulu'));
console.log(cola.Enqueue('deya'));
cola.Dequeue();
console.log(cola.size());
cola.print();
*/



