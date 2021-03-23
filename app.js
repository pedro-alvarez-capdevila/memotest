

//cartas

const ArrayDeCartas = [
    {
        nombre: 'bananas',
        img: 'images/bananas.png'
      },
      {
        nombre: 'kiwi',
        img: 'images/kiwi.png'
      },
      {
        nombre: 'manzana',
        img: 'images/manzana.png'
      },
      {
        nombre: 'palta',
        img: 'images/palta.png'
      },
      {
        nombre: 'uva',
        img: 'images/uva.png'
      },
      {
        nombre: 'piña',
        img: 'images/piña.png'
      },
      {
        nombre: 'sandia',
        img: 'images/sandia.png'
      },
      {
        nombre: 'durazno',
        img: 'images/durazno.png'
      },
      {
        nombre: 'coco',
        img: 'images/coco.png'
      },
      {
        nombre: 'bananas',
        img: 'images/bananas.png'
      },
      {
        nombre: 'kiwi',
        img: 'images/kiwi.png'
      },
      {
        nombre: 'manzana',
        img: 'images/manzana.png'
      },
      {
        nombre: 'palta',
        img: 'images/palta.png'
      },
      {
        nombre: 'uva',
        img: 'images/uva.png'
      },
      {
        nombre: 'piña',
        img: 'images/piña.png'
      },
      {
        nombre: 'sandia',
        img: 'images/sandia.png'
      },
      {
        nombre: 'durazno',
        img: 'images/durazno.png'
      },
      {
        nombre: 'coco',
        img: 'images/coco.png'
      }
]


ArrayDeCartas.sort(() => 0.5 - Math.random())
// displays
const grid = document.querySelector(".grid");
const scoreResultado1 = document.querySelector("#resultado1");
const scoreResultado2 = document.querySelector("#resultado2");
const h1Score1 = document.querySelector("#h1Result1");
const h1Score2 = document.querySelector("#h1Result2");
// cuando haya dos cartas volteadas tengo que fijarme si coinciden con otra funcion
let arrayVolteadas = []
let arrayVolteadasId = []
let arrayGanadoras = []
// variable para los jugadores
let jugadorJugando = 1;
let jugador1 = 0;
let jugador2 = 0;
// 


/* creo el tablero */
function crearTablero() {
    for (let i = 0; i < ArrayDeCartas.length; i++) {
        const carta = document.createElement('img');
        carta.setAttribute('src', "images/blank.png");
        carta.setAttribute('carta-id', i);
        carta.addEventListener('click', voltear)
        grid.appendChild(carta);
    }
}

function verCoincidencia() {
    const cartas = document.querySelectorAll("img")
    let carta1 = arrayVolteadasId[0];
    let carta2 = arrayVolteadasId[1];
    
    console.log(carta1);
    console.log(carta2);
    console.log(arrayVolteadas[0]);
    console.log(arrayVolteadas[1]);
    // cuando apreta la misma carta dos veces
    if (carta1 === carta2) {
        cartas[carta1].setAttribute('src', "images/blank.png");
        cartas[carta2].setAttribute('src', "images/blank.png");
    } else if (arrayVolteadas[0] === arrayVolteadas[1]) {
        // son la misma carta
        arrayGanadoras.push(arrayVolteadas[0]);
        // desabilito el evento
        cartas[carta1].removeEventListener('click', voltear);
        cartas[carta2].removeEventListener('click', voltear);
        // las pongo en blanco
        cartas[carta1].setAttribute('src', "images/white.png");
        cartas[carta2].setAttribute('src', "images/white.png");
        if (jugadorJugando === 1) {
          jugador1++;
        } else {
          jugador2++;
        }
    } else {
        cartas[carta1].setAttribute('src', "images/blank.png");
        cartas[carta2].setAttribute('src', "images/blank.png");
    }
    scoreResultado1.textContent = jugador1;
    scoreResultado2.textContent = jugador2;
    if (jugadorJugando === 1) {
      jugadorJugando = 2;
      h1Score1.style.color = "black";
      h1Score2.style.color = "red";
    } else {
      jugadorJugando = 1;
      h1Score1.style.color = "red";
      h1Score2.style.color = "black";
    }
    arrayVolteadas = [];
    arrayVolteadasId = [];
    if ( arrayGanadoras.length === cartas.length / 2){
        if (jugador1 > jugador2){
          h1Score1.textContent = "el jugador 1 es el ganador!!";
          h1Score1.style.fontSize = "5em"
          h1Score1.style.color = "black";
          h1Score1.style.marginTop = "7em";
          h1Score2.style.display = "none"
        } else {
          h1Score2.textContent = "el jugador 2 es el ganador!!";
          h1Score2.style.fontSize = "5em";
          h1Score2.style.color = "black";
          h1Score2.style.marginTop = "7em";
          h1Score1.style.display = "none";
        }
    }
}


/* voltear carta */
function voltear() {
    let cartaId = this.getAttribute('carta-id');
    // pusheo la carta
    arrayVolteadas.push(ArrayDeCartas[cartaId].nombre);
    arrayVolteadasId.push(cartaId);
    // doy vuelta la carta
    this.setAttribute('src', ArrayDeCartas[cartaId].img);
    // veo si tengo dos cartas volteadas y en ese caso llamo a la funcion match
    if (arrayVolteadas.length === 2) {
        setTimeout(verCoincidencia, 300)
    }
}



crearTablero();