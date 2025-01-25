const iconTheme = document.getElementById("icon-theme")
// Obtener el valor de una variable CSS


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


//FUNCION PARA CAMBIAR EL TEMA A OSCURO 
iconTheme.addEventListener('click', function () {
  // Conjunto actual esperado
  let currentVariables = {
    '--nav-color': 'rgb(238, 238, 238)',
    '--primary-color': '#005091',
    '--contain-color': '#005091',
    '--color-font': 'rgb(0, 0, 0)',
    '--color-title': 'rgb(255, 255, 255)',
    '--background-color': 'rgb(238, 238, 238)'
  };

  // Nuevo conjunto de variables
  let newVariables = {
    '--nav-color': '#000000',
    '--primary-color': '#001f38',
    '--contain-color': '#001f38',
    '--color-font': 'white',
    '--color-title': 'black',
    '--background-color': 'black'
  };

  // Obtener las variables actuales de :root
  let rootStyles = getComputedStyle(document.documentElement);
  let isMatch = true;

  // Verificar si las variables actuales coinciden con el conjunto esperado
  for (let [key, value] of Object.entries(currentVariables)) {
    if (rootStyles.getPropertyValue(key).trim() !== value) {
      isMatch = false;
      break;
    }
  }

  // Cambiar a las nuevas variables si coinciden
  if (isMatch) {
    for (let [key, value] of Object.entries(newVariables)) {
      document.documentElement.style.setProperty(key, value);
    }
    console.log('Variables cambiadas a:', newVariables);
  } else {
    for (let [key, value] of Object.entries(currentVariables)) {
      document.documentElement.style.setProperty(key, value);
    }
    console.log('Variables cambiadas a:', currentVariables);
  }
});

