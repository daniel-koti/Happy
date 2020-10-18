const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}
// get element from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// create map
const map = L.map('mapid', options).setView([lat, lng], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 58],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

// create and add marker
L.marker([lat, lng], { icon})
  .addTo(map)

// Galeria de imagem

function selectImage(event) {

  const button = event.currentTarget;

  // Remover todas as classes .active
  const buttons = document.querySelectorAll('.images button');
   
  buttons.forEach( (button) => {
    button.classList.remove('active')
  })

  // Selecionar a imagem clicada
  const image = button.children[0]

  // Atualizar o container de imagem
  const imageContainer = document.querySelector('.orphanage-details > img')
  imageContainer.src = image.src

  // Adicionar a classe .active para este botao
  button.classList.add('active')
}