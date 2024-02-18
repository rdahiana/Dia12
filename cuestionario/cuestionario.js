//--------------------- CREAMOS LAS FUNCIONES --------------------------
/*Escribir una función en JavaScript que calcule la versión que suma en 
la ecuación cuadrática*/ 
function cuadratica(a, b, c) {
    var discriminante = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    var x1 = (-b + discriminante) / (2 * a);
    return x1;
}

/*Escribir una función en JavaScript que calcule la versión que resta en la ecuación
cuadrática*/ 
function cuadraticaResta(a, b, c) {
    var discriminante = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    var x = (-b - discriminante) / (2 * a);
    return x;
}

/*Escribir una función en JavaScript que reciba un id y un string y ponga
 como innerHTML del elemento con el id referenciado el valor del string
Entrada: id, string Salida: n/a*/
function f_html(ID, Salida){
    let elemento = document.getElementById(ID)
    elemento.innerHTML = Salida; 
    var contenido = document.getElementById(ID).innerHTML;
    return contenido;
}

/*Escribir una función en JavaScript que reciba un id, y ponga en el 
innerHTML del elemento con el id referenciado un número aleatorio 
entre 1 y 100*/
function f_htmlRandom(ID){
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let elemento = document.getElementById(ID)
    elemento.innerHTML = numeroAleatorio; 

    var contenido = document.getElementById(ID).innerHTML;
    return contenido;
}
//--------------------------------------------------------------------


// Llama a la función cuadratica con valores específicos
var resultadoSuma = cuadratica(1, -3, 2);
console.log("Resultado de la ecuación cuadrática con suma:", resultadoSuma);

// Llama a la función cuadraticaResta con valores específicos
var resultadoResta = cuadraticaResta(1, -3, 2);
console.log("Resultado de la ecuación cuadrática con resta:", resultadoResta);
