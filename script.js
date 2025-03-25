document.addEventListener("DOMContentLoaded", function () {
  // Elementos del DOM
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const imagen = document.getElementById("imagen");

  // Rutas de imágenes
  const imagenes = {
    imagen1:
      "https://images.unsplash.com/photo-1742736839475-2ca610373470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
    imagen2:
      "https://plus.unsplash.com/premium_photo-1742820353178-911bce846134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
    imagen3:
      "https://images.unsplash.com/photo-1742316946714-b06b7cb98e53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
  };

  // Función para cambiar imagen
  function cambiarImagen(ruta, descripcion, boton) {
    imagen.src = ruta;
    imagen.alt = descripcion;

    // Resaltar botón activo
    document.querySelectorAll(".boton-imagen").forEach((boton) => {
      boton.style.backgroundColor = "#4a6fa5";
    });
    boton.style.backgroundColor = "#3a5a80";
  }

  // Event listeners
  btn1.addEventListener("click", (e) =>
    cambiarImagen(imagenes.imagen1, "Imagen 1", e.target)
  );
  btn2.addEventListener("click", (e) =>
    cambiarImagen(imagenes.imagen2, "Imagen 2", e.target)
  );
  btn3.addEventListener("click", (e) =>
    cambiarImagen(imagenes.imagen3, "Imagen 3", e.target)
  );

  // Establecer primer botón como activo inicialmente
  btn1.style.backgroundColor = "#3a5a80";
});
