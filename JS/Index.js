emailjs.init("e2Sl3H41c1FHJlRF7"); 

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.target;
  emailjs.sendForm("service_6d0nxod", "template_qgx1kbb", form).then(
    function (response) {
      alert("¡Correo enviado con éxito!");
    },
    function (error) {
      alert("Hubo un error al enviar el correo.");
    }
  );
});

function toggleMenu() {
  var menuContent = document.querySelector('.menu-content');
  if (menuContent.style.display === "block") {
      menuContent.style.display = "none";
  } else {
      menuContent.style.display = "block";
  }
}
