let imagenes = [
    {
      "url": "../img/Roomie.webp"
  
    },
    {
      "url": "../img/Familiar.webp"
  
    },
    {
        "url": "../img/Super.webp"
    
    },
    {
        "url": "../img/Mega.webp"
    
    },
  
  ]
  
  let atras = document.getElementById('atras');
  let adelante = document.getElementById('adelante');
  let imagen = document.getElementById('img');
  let puntos = document.getElementById('puntos');
  let actual = 0;
  posicionCarrusel();
  
  atras.addEventListener('click', function () {
    actual -= 1;
    if (actual == -1) {
      actual = imagenes.length - 1;
    }
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="Imagen del carrusel" loading="lazy"></img>`;
    posicionCarrusel();
    actualizarImagenYEvento();
  });
  
  adelante.addEventListener('click', function () {
    actual += 1;
    if (actual == imagenes.length) {
      actual = 0;
    }
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="Imagen del carrusel" loading="lazy"></img>`;
    posicionCarrusel();
    actualizarImagenYEvento();
  });
  
  function posicionCarrusel() {
    puntos.innerHTML = "";
    for (var i = 0; i < imagenes.length; i++) {
      puntos.innerHTML += `<p class="${i === actual ? 'bold' : ''}">•</p>`;
    }
  }

  let modal = document.getElementById("modal");
  let modalImg = document.getElementById("modal-img");

  
  // Función para actualizar la imagen del carrusel y el evento de clic
  function actualizarImagenYEvento() {
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="Imagen del carrusel" loading="lazy">`;
    imagen.querySelector('.img').addEventListener('click', function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  }
  
  // Cierra el modal al hacer clic fuera de la imagen
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  
  // Inicializa el carrusel
  actualizarImagenYEvento();


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