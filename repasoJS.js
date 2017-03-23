/*Creando un objeto en JS*/
var persona={};

/*Asignando atributos al objeto*/

/*Primera opcion*/
var persona={
  nombre:"Juan",
  ape1:"Garcia",
  edad:34
};

 /* Segunda opcion:  Una vez creado el objeto:*/


var persona={};

persona.nombre="Juan";
persona.ape1="Garcia";
persona.edad=34;

/*Tercera Opcion: Mediante un constructor*/



function Persona() {
  this.nombre="Juan";
  this.ape1="Garcia";
  this.edad=34;
}

var persona=new Persona();

/*Asignando Funciones*/

var persona={
  nombre:"Juan",
  ape1:"Garcia",
  edad:34,
  getNombreCompleto:function() {
    return this.nombre+this.ape1;
  }
}



var persona={};

persona.nombre="Juan";
persona.ape1="Garcia";
persona.edad=34;
persona.getNombreCompleto=function() {
    return this.nombre+this.ape1;
};



function Persona() {
  this.nombre="Juan";
  this.ape1="Garcia";
  this.edad=34;
  this.getNombreCompleto=function() {
    return this.nombre+this.ape1;
  };
}

var persona=new Persona();

/*Creando Funciones*/

function sumar(a,b) {
  return a+b;
}

var c=sumar(1,2);



var sumar=function (a,b) {
  return a+b;
}

var c=sumar(1,2);

/* Podemos hacer funciones que retornan funciones y llamarlas directamente.*/


function getFunction() {

  var sumar=function (a,b) {
    return a+b;
  }

  return sumar;
}

var c=getFunction()(1,2);

/*Closure*/


function getFunction() {

  var extra=100;

  var sumar=function (a,b) {
    return a+b+extra;
  }

  return sumar;
}

var sumaClosure=getFunction();

var c=sumaClosure(1,2);

Al ejecutar el ejemplo , la variable c vale 103.
 Igual no te parece raro pero cuando se está ejecutando la función sumaClosure,
 ya no debería existir la variable extra pero si que existe y la función
sumaClosure aun puede usar su valor aun cuando ya no estamos
dentro de getFunction.
 Es es realmente una closure.
 Una función que se ejecuta en el contexto de donde se
 creo no donde está ahora.
 Puede parecer que esto es poco útil,
 pero con tanta llamada asíncrona en JavaScript es realmente útil.

El ejemplo lo podemos liar un poco mas añadiendo nuevas variables llamadas extra y veremos como no afecta al resultado, éste sigue siendo 103:

/*Util para llamadas asincronas*/

var extra=1000;

function getFunction() {

  var extra=100;

  var sumar=function (a,b) {
    return a+b+extra;
  }

  return sumar;
}

extra=1100;

var fn=getFunction();

extra=1200;

var c=fn(1,2);
