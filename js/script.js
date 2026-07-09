
// INICIALIZAR AOS
AOS.init({ duration: 1000, once: true });

// NAVBAR SCROLL
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("nav-scroll", window.scrollY > 50);
});


// SLIDER COMPARADOR
const slider = document.querySelector(".slider");
const overlay = document.querySelector(".overlay");

if (slider && overlay) {
  slider.addEventListener("input", () => {
    overlay.style.width = slider.value + "%";
  });
}
// WHATSAPP
const numeroWhatsApp = "569XXXXXXXX";

// SERVICIOS
const servicios = {
  pintura: {
    titulo: "Pintura Automotriz",
    texto: "Pintura profesional en cabina especializada con acabado espejo premium.",
    imagenes: [
      "images/apliacion.jpg",
      "images/aplicacion-pintura.jpg",
      "images/sprit.jpg",
      "images/auto-gris-restauracion.jpg"
    ]
  },
  pulido: {
    titulo: "Pulido y Detallado",
    texto: "Eliminamos micro-rayones y devolvemos brillo profundo tipo showroom.",
    imagenes: [
      "images/polichado.jpg",
      "images/pulido-pefecto.jpg",
      "images/autoter-minado.jpg"
    ]
  },
  golpes: {
    titulo: "Reparación de Golpes",
    texto: "Corrección precisa de abolladuras con técnicas profesionales.",
    imagenes: [
      "images/golpe-auto.jpg",
      "images/latoneria.jpg"
    ]
  }
};


// MODAL
let sliderInterval;

function abrirModal(servicio, nombreServicio) {

  const data = servicios[servicio];

  document.getElementById("modalTitulo").innerText = data.titulo;
  document.getElementById("modalTexto").innerText = data.texto;

  const contenedor = document.getElementById("modalImagenes");
  contenedor.innerHTML = `<div class="slider-modal"></div>`;
  const sliderModal = document.querySelector(".slider-modal");

  data.imagenes.forEach((img, i) => {
    sliderModal.innerHTML += `<img src="${img}" class="${i === 0 ? 'active' : ''}">`;
  });

  const mensaje = encodeURIComponent(
    `Hola, quiero cotizar el servicio de ${nombreServicio}`
  );

  document.getElementById("btnWhatsappServicio").href =
    `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  iniciarSlider();

  document.getElementById("modal").style.display = "flex";
}

function iniciarSlider() {
  clearInterval(sliderInterval);

  const imgs = document.querySelectorAll(".slider-modal img");
  let index = 0;

  sliderInterval = setInterval(() => {
    imgs[index].classList.remove("active");
    index = (index + 1) % imgs.length;
    imgs[index].classList.add("active");
  }, 2500);
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
  clearInterval(sliderInterval);
}

window.onclick = (e) => {
  if (e.target.id === "modal") cerrarModal();
};


// FORMULARIO
function enviarFormulario(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const servicio = document.getElementById("servicio").value;
  const mensaje = document.getElementById("mensaje").value;

  const texto = encodeURIComponent(
    `Hola, soy ${nombre}.
Mi número: ${telefono}
Servicio: ${servicio}
Detalle: ${mensaje}`
  );

  window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, "_blank");
}