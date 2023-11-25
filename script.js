let imagenes = [
    {
        "url": "img/cliente1.jpg",
        "nombre": "Cliente 01",
        "descripcion": "Este es un espacio donde damos gracias a todos nuestros clientes que nos prefieren estamos para serviles."

    },
    {
        "url": "img/cliente2.jpg",
        "nombre": "Cliente 02",
        "descripcion": "Este es un espacio donde damos gracias a todos nuestros clientes que nos prefieren estamos para serviles."

    },
    {
        "url": "img/cliente3.jpg",
        "nombre": "Cliente 03",
        "descripcion": "Este es un espacio donde damos gracias a todos nuestros clientes que nos prefieren estamos para serviles."

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}

let enlaces = document.querySelectorAll(".redes a");

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function (event) {
    event.preventDefault();
    let plataforma = enlace.id.toLowerCase();
    let urls = {
      facebook: "https://www.facebook.com/rickkevin.samanramirez.52/",
      github: "https://github.com/RickSnRz",
      instagram: "https://www.instagram.com/happydead14/",
      linkedin:
        "https://www.linkedin.com/in/rick-sam%C3%A1n-ramirez-67b9a725b/",
    };
    if (plataforma in urls) {
      window.open(urls[plataforma], "_blank");
    } else {
      console.log("Plataforma no reconocida");
    }
  });
});

let menuVisible = false;
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
