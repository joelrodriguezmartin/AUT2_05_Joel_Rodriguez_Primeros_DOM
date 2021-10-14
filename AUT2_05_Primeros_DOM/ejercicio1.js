/*1.- INFORMACIÓN

 
En la página web proporcionada (èjercicio_1.html) puedes ver un texto con unos enlaces.
Mediante la navegación de los elementos del DOM debes averiguar:
    - // Numero de enlaces de la pagina
    - // Direccion del penultimo enlace
    - // Numero de enlaces que apuntan a http://prueba
    - // Numero de enlaces del tercer párrafo

    Todas las respuestas debes añadirlas en la sección "información"*/

function linksenpagina(){
    let informacion = document.getElementById("informacion");//Seleccionamos el elemento información
    informacion.innerHTML+="Numero de links en la pagina = " + document.getElementsByTagName("a").length + "<br>"//Le añadimos la info
}
function direccionpenultimo(){
    let elements = document.getElementsByTagName("a");//Seleccionamos los elementos con tag a.
    penultimo = elements[elements.length-2]//El elemento en posicion -2 es el penúltimo del array.
    let informacion = document.getElementById("informacion");//Seleccionamos el elemento información
    informacion.innerHTML+="Direccion del penultimo link = " + penultimo.href + "<br>";//Le añadimos la info
}
function numeroenlacesprueba(){
    let elements = document.getElementsByTagName("a");//Seleccionamos los links
    let direccion = "http://prueba/";
    let count = 0;
    for (let i = 0; i < elements.length; i++){//Recorremos la lista de elementos
        if(elements[i].href == direccion){//Si son iguales a la direccion deseada aumentamos el contador
            count++;
        }
    }
    let informacion = document.getElementById("informacion");//Seleccionamos el elemento información
    informacion.innerHTML+="Numero de enlaces a http://prueba/= " + count + "<br>";//Le añadimos la info
}
function enlacestercerparrafo(){
    let tercerParrafo = document.getElementsByTagName("p")[2];//Seleccionamos el indice 2 del array de "p" (tercer elemento)
    let numeroEnlaces = tercerParrafo.getElementsByTagName("a").length;//De ese elemento seleccionamos los "a" y contamos cuantos hay
    let informacion = document.getElementById("informacion");//Seleccionamos el elemento información
    informacion.innerHTML+="Cantidad de enlaces en el tercer parrafo = " + numeroEnlaces + "<br>";//Le añadimos la info
}