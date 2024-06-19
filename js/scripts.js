$(document).ready(function () {
  //creacion de URL
  const apiKey = "f050056a8674cb5f71a50eeef41cd7d0";
  const url = "https://gnews.io/api/v4/search?q=example&apikey=" + apiKey;

  $.ajax({
    type: "get",
    url: url,
    dataType: "json",
    success: function (response) {
      const articles = response.articles;

      for (i = 0; i < 4; i++) {
        $("#title" + i).text(articles[i].title);
        $("#description" + i).text(articles[i].description);
        let image =
          '<img id="image' +
          i +
          '" src="' +
          articles[i].image +
          '" class="card-img-top">';
        $("#articles" + i).prepend(image);
        $("#url" + i).attr("href", articles[i].source.url);
        $("#url" + i).text(articles[i].source.name);
      }
    },
    error: function (error) {
      console.error("Error al obtener noticias: " + error.statusText);
    },
  });
});

// Función para validar los datos de contacto
function validarDatosContacto() {
  var nombre = document.getElementById('name').value;
  var apellidos = document.getElementById('lName').value;
  var telefono = document.getElementById('phone').value;
  var correo = document.getElementById('email').value;

  // Expresiones regulares para validar los datos
  var nombreRegex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]{1,15}$/;
  var apellidosRegex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]{1,40}$/;
  var telefonoRegex = /^\d{1,9}$/;
  var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validar nombre
  if (!nombreRegex.test(nombre)) {
      console.log("hola")
      alert("Por favor, ingresa un nombre válido.");
      return false;
  }

  // Validar apellidos
  if (!apellidosRegex.test(apellidos)) {
      alert("Por favor, ingresa apellidos válidos.");
      return false;
  }

  // Validar teléfono
  if (!telefonoRegex.test(telefono)) {
      alert("Por favor, ingresa un teléfono válido (solo números hasta 9 dígitos).");
      return false;
  }

  // Validar correo electrónico
  if (!correoRegex.test(correo)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return false;
  }

  // Si todos los datos son válidos, puedes continuar con el siguiente paso del formulario
  // Aquí puedes mostrar u ocultar secciones del formulario según sea necesario
  mostrarPresupuesto();

  return false; // Retorna false para evitar que el formulario se envíe automáticamente
}

// Función para mostrar la sección de presupuesto
function mostrarPresupuesto() {
  document.getElementById('formContacto').style.display = 'none';
  document.getElementById('Presupuesto').style.display = 'block';
}


function calcularPresupuesto() {
  let producto = Number(document.getElementById('producto').value);
  let plazo = Number(document.getElementById('plazo').value);

  let extra1 = Number(document.getElementById('extra1').checked ? document.getElementById('extra1').value : 0);
  let extra2 = Number(document.getElementById('extra2').checked ? document.getElementById('extra2').value : 0);
  let extra3 = Number(document.getElementById('extra3').checked ? document.getElementById('extra3').value : 0);
  let extra4 = Number(document.getElementById('extra4').checked ? document.getElementById('extra4').value : 0);

  let total = plazo * producto + extra1 + extra2 + extra3 + extra4;

  document.getElementById('total').value = total.toFixed(2);
}

function iniciarMap(){
  var coord = {lat:-34.5956145 ,lng: -58.4431949};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
} 
