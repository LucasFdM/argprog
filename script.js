/*Script para Experience*/
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left-arrow');

leftArrow.addEventListener('click', () => {
  slider.style.transform = 'translateX(-30%)';
});

slider.addEventListener('mouseenter', () => {
  slider.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
});

slider.addEventListener('mouseleave', () => {
  slider.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  slider.style.transform = 'translateX(0%)';
});

let autoScrollTimer = setInterval(() => {
  slider.style.transform = 'translateX(-30%)';
}, 3000);

/*Envio de Form Contacto*/
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    alert('Gracias por contactarme, ' + name + '! Respondere a la brevedad.');
  });
});

/*Footer*/
function initMap() {
  const location = { 
    lat: -27.366561, lng: -55.896898 
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

