let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del Número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10 ';

function intentoDeUsuario() {
    let numero = prompt('Indica un número del 1 al 10');
    return numero;
}