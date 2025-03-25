document.addEventListener("DOMContentLoaded", function () {
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const imagen = document.getElementById("imagen");

  const imagenes = {
    imagen1: {
      url: "https://images.unsplash.com/photo-1742736839475-2ca610373470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
      descripcion: "Imagen 1 - Paisaje natural",
    },
    imagen2: {
      url: "https://plus.unsplash.com/premium_photo-1742820353178-911bce846134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
      descripcion: "Imagen 2 - Ciudad moderna",
    },
    imagen3: {
      url: "https://images.unsplash.com/photo-1742316946714-b06b7cb98e53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
      descripcion: "Imagen 3 - Atardecer",
    },
  };

  function cambiarImagen(imagenSeleccionada, boton) {
    imagen.src = imagenSeleccionada.url;
    imagen.alt = imagenSeleccionada.descripcion;

    // Quitar clase active de todos los botones
    document.querySelectorAll(".boton-imagen").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Añadir clase active al botón seleccionado
    boton.classList.add("active");
  }

  btn1.addEventListener("click", (e) =>
    cambiarImagen(imagenes.imagen1, e.target)
  );
  btn2.addEventListener("click", (e) =>
    cambiarImagen(imagenes.imagen2, e.target)
  );
  btn3.addEventListener("click", (e) =>
    cambiarImagen(imagenes.imagen3, e.target)
  );

  // Establecer primer botón como activo inicialmente
  btn1.classList.add("active");
});
