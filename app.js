
const sections = document.querySelectorAll(".principal .prin-l, .principal .sect-first");

// Configuración del Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Agregar la clase "active" cuando el elemento esté visible
            entry.target.classList.add("active");
        } else {
            // Quitar la clase "active" si el elemento sale de la vista (opcional)
            entry.target.classList.remove("active");
        }
    });
}, {
    threshold: 0.2, // Se activa cuando el 20% del elemento es visible
});

// Observar cada sección
sections.forEach((section) => {
    observer.observe(section);
});






function checkScroll() {
    const sections = document.querySelectorAll('.about-us');
    
    // Añadir animación a los textos y al contenedor
    const texts = document.querySelectorAll('#what, #your, #explore, p');
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect(); // Obtiene la posición del elemento
      const windowHeight = window.innerHeight; // Altura de la ventana
  
      // Si la sección está visible en la pantalla
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        section.classList.add('visible'); // Añade la clase 'visible' al contenedor
      } else {
        section.classList.remove('visible'); // Si no está visible, elimina la clase
      }
    });
  
    // Animar los textos de forma individual
    texts.forEach(text => {
      const rect = text.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        text.classList.add('visible'); // Añade la clase 'visible' a los textos
      } else {
        text.classList.remove('visible'); // Si no está visible, elimina la clase
      }
    });
  }
  
  // Ejecuta la función al hacer scroll
  window.addEventListener('scroll', checkScroll);
  
  // Llama a la función al cargar la página para animar si el contenido ya está visible
  checkScroll();


// After effects animation

document.addEventListener("DOMContentLoaded", () => {
    const animation = document.getElementById("scroll-animation");
  
    let lastScrollTop = 0; // Para controlar la dirección del scroll
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      // Solo reiniciar si el scroll cambia significativamente
      if (Math.abs(scrollTop - lastScrollTop) > 10) {
        animation.stop(); // Reinicia la animación
        animation.play(); // Vuelve a reproducirla
      }
  
      lastScrollTop = scrollTop;
    });
  });


//   CARDS PLACES
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Función que maneja el scroll y agrega o elimina la clase 'visible'
function handleScroll() {
    const placesContainer = document.getElementById('places');
    
    // Si el contenedor está en la vista y no tiene la clase 'visible', agrégala
    if (isInView(placesContainer) && !placesContainer.classList.contains('visible')) {
        placesContainer.classList.add('visible');
    }
    // Si el contenedor ya no está en la vista, elimina la clase 'visible'
    else if (!isInView(placesContainer) && placesContainer.classList.contains('visible')) {
        placesContainer.classList.remove('visible');
    }
}

// Detecta el scroll y ejecuta la función
window.addEventListener('scroll', handleScroll);

// Llama a la función de inmediato para verificar si el contenedor ya está en la vista al cargar la página
handleScroll();



const items = document.querySelectorAll(".item");

// Configurar el Intersection Observer
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Agregar la clase 'visible' cuando el elemento entre en el viewport
            entry.target.classList.add("visible");
        } else {
            // Quitar la clase 'visible' cuando el elemento salga del viewport (opcional)
            entry.target.classList.remove("visible");
        }
    });
}, {
    threshold: 0.2, // Se activa cuando el 20% de la tarjeta es visible
});

// Observar cada tarjeta
items.forEach((item) => observer2.observe(item));



