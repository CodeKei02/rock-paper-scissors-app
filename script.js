//let elegirArma = document.querySelectorAll('.btn-ataque');
let campoBatalla = document.querySelector('#campo-batalla');
let imgAtaqueJugador = document.querySelector('.ataque-jugador');
let imgAtaqueComputadora = document.querySelector('.ataque-computadora');
let mensajeBatalla = document.querySelector('#resultado-batalla');

let btnPiedra = document.querySelector('#piedra');
let btnPapel = document.querySelector('#papel');
let btnTijeras = document.querySelector('#tijera');

let opcionJugador;
let opcionComputadora;
let imgJugador;
let imgComputadora;
let imagenes = [
    {
        name: 'Piedra',
        url: "img/Piedra.png"
    },

    {
        name: 'Papel',
        url: "img/Papel.png"
    },

    {
        name: 'Tijeras',
        url: "img/Tijeras.png"
    }
];


function iniciar(){
    campoBatalla.style.display = 'flex';
}

btnPiedra.addEventListener('click', () => {
    opcionJugador = 'Piedra';
    ataquePC();
});

btnPapel.addEventListener('click', () => {
    opcionJugador = 'Papel';
    ataquePC();
});

btnTijeras.addEventListener('click', () =>{
    opcionJugador = 'Tijeras';
    ataquePC();
});

function ataquePC(){
    let getRandom = Math.floor(Math.random() * 3) + 1;
    opcionComputadora = getRandom;
    if(opcionComputadora === 1){
        opcionComputadora = "Piedra";
    }else if(opcionComputadora === 2){
        opcionComputadora = 'Papel';
    }else{
        opcionComputadora = 'Tijeras';
    }
    jugarPPT();
}

function jugarPPT(){
    if(
        (opcionJugador === 'Piedra' && opcionComputadora === 'Tijeras') ||
        (opcionJugador === 'Papel' && opcionComputadora === 'Piedra') ||
        (opcionJugador === 'Tijeras' && opcionComputadora === 'Papel')
    ){
        mensajeBatalla.innerHTML = 'Tu ganas😁';
    }else if(
        (opcionComputadora === 'Piedra' && opcionJugador === 'Tijeras') ||
        (opcionComputadora=== 'Papel' && opcionJugador === 'Piedra') ||
        (opcionComputadora === 'Tijeras' && opcionJugador === 'Papel')
    ){
        mensajeBatalla.innerHTML = 'La computadora gana🥲';
    }else{
        mensajeBatalla.innerHTML = 'Empate😒';
    }

    addImg();
}

function addImg(){
    for(let i = 0; i < imagenes.length; i++){
        if(opcionJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            let insertar = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = insertar;
        }

        if(opcionComputadora == imagenes[i].name){
            imgComputadora = imagenes[i].url;
            let insertar = `<img class="img-batalla" src=${imgComputadora} alt="">`;
            imgAtaqueComputadora.innerHTML = insertar;
        }
    }
    iniciar();
}
