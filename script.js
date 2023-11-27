let imagenes = [
  {
    "url": "img/Pollada.jpg",
    "nombre": "Pollada Especial",
    "descripcion": "1/4 pollada especial, papa sancochada, aji, vinagreta."

  },
  {
    "url": "img/Chuletada.jpg",
    "nombre": "Chuletada Especial",
    "descripcion": "1 Chuleta especial, papa sancochada, aji, vinagreta."

  },

]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function () {
  actual -= 1

  if (actual == -1) {
    actual = imagenes.length - 1
  }

  imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
  texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
  posicionCarrusel()
})
adelante.addEventListener('click', function () {
  actual += 1

  if (actual == imagenes.length) {
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
  for (var i = 0; i < imagenes.length; i++) {
    if (i == actual) {
      puntos.innerHTML += '<p class="bold">.<p>'
    }
    else {
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
      facebook: "https://www.facebook.com/donayolandape",
      whatsapp: "https://wa.me/message/45PJO4OH2WAZM1",
      instagram: "https://www.instagram.com/donayolandaperu/",
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
