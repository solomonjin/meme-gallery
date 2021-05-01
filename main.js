var imageURLs = [];

var gallery = document.querySelector('main');
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function(){
  console.log(imageUrlInput.value);
  if (imageUrlInput.value !== '') {
    imageURLs.push(imageUrlInput.value);
    imageUrlInput.value = '';
    updateGallery();
  }
})

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageURLs.length; i++) {
    imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageURLs[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
