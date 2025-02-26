const iconTheme = document.getElementById("icon-theme")
// Obtener el valor de una variable CSS


function _0x4d87(_0x433e27,_0x138fba){const _0x5356de=_0x5356();return _0x4d87=function(_0x4d875f,_0x428930){_0x4d875f=_0x4d875f-0x1a1;let _0x5b5e46=_0x5356de[_0x4d875f];return _0x5b5e46;},_0x4d87(_0x433e27,_0x138fba);}const _0x16631f=_0x4d87;(function(_0x4166a8,_0x5748ec){const _0x1a637c=_0x4d87,_0x24026a=_0x4166a8();while(!![]){try{const _0x3141d6=parseInt(_0x1a637c(0x1a4))/0x1*(parseInt(_0x1a637c(0x1b2))/0x2)+parseInt(_0x1a637c(0x1b4))/0x3*(parseInt(_0x1a637c(0x1b6))/0x4)+-parseInt(_0x1a637c(0x1a1))/0x5*(parseInt(_0x1a637c(0x1a5))/0x6)+-parseInt(_0x1a637c(0x1a9))/0x7*(-parseInt(_0x1a637c(0x1a2))/0x8)+-parseInt(_0x1a637c(0x1a3))/0x9+-parseInt(_0x1a637c(0x1af))/0xa+parseInt(_0x1a637c(0x1ad))/0xb;if(_0x3141d6===_0x5748ec)break;else _0x24026a['push'](_0x24026a['shift']());}catch(_0x445cff){_0x24026a['push'](_0x24026a['shift']());}}}(_0x5356,0xe7354),emailjs[_0x16631f(0x1b0)](_0x16631f(0x1b5)),document[_0x16631f(0x1ae)]('.form')['addEventListener'](_0x16631f(0x1a6),function(_0x5ab212){const _0x506bb6=_0x16631f;_0x5ab212[_0x506bb6(0x1a7)]();const _0x2ddb7a=_0x5ab212[_0x506bb6(0x1aa)];emailjs[_0x506bb6(0x1ac)](_0x506bb6(0x1a8),_0x506bb6(0x1b1),_0x2ddb7a)[_0x506bb6(0x1b3)](function(_0x4371b2){alert('¡Correo\x20enviado\x20con\x20éxito!');},function(_0x5771bb){const _0x2c3ab8=_0x506bb6;alert(_0x2c3ab8(0x1ab));});}));function _0x5356(){const _0x6405cd=['init','template_qgx1kbb','2ojlhQB','then','70140Zwivsa','e2Sl3H41c1FHJlRF7','252tIvQJR','6446905SkfaLI','1407752uWErFW','15681645VkUiKw','436025pIBdhn','6XRoStU','submit','preventDefault','service_6d0nxod','28GMoXsi','target','Hubo\x20un\x20error\x20al\x20enviar\x20el\x20correo.','sendForm','25673373XLeEtp','querySelector','9679700gTlqEz'];_0x5356=function(){return _0x6405cd;};return _0x5356();}

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
  // Conjunto actual esperado (tema claro)
  let currentVariables = {
      '--nav-color': 'rgb(238, 238, 238)',
      '--primary-color': '#ffffff',
      '--contain-color': '#ffffff',
      '--color-font': 'rgb(0, 0, 0)',
      '--color-title': 'rgb(255, 255, 255)',
      '--background-color': 'rgb(238, 238, 238)'
  };

  // Nuevo conjunto de variables (tema oscuro)
  let newVariables = {
      '--nav-color': '#000000',
      '--primary-color': '#005da8',
      '--contain-color': '#005da8',
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

  // Cambiar las variables CSS y el video de fondo
  if (isMatch) {
      // Aplicar el tema oscuro
      for (let [key, value] of Object.entries(newVariables)) {
          document.documentElement.style.setProperty(key, value);
      }
    
      CambiarVideoFondo('black');
  } else {
      // Volver al tema claro
      for (let [key, value] of Object.entries(currentVariables)) {
          document.documentElement.style.setProperty(key, value);
      }

      
      CambiarVideoFondo('white');
  }
});


function CambiarVideoFondo(fondo) {
  const video = document.getElementById("video_fondo");
  const source = document.getElementById("source_video");

  try {
      if (fondo === "black") {
          source.src = "../recurses/fondo_black.mp4";
      } else {
          source.src = "../recurses/fondo_white.mp4";
      }
      video.load();
      video.play();
  } catch (error) {
      console.warn("No se pudo cambiar el video de fondo", error);
  }
}

//FUNCIONES DE CARGA GLOBAL 
window.onload = function() {
  CambiarVideoFondo("black");
};


