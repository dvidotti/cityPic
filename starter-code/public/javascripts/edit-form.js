let inputPhotoEdit = document.getElementById('photo-edit');
let photoNameEdit = document.getElementById('photo-name-edit');

inputPhotoEdit.onchange = () => {
  if (inputPhotoEdit) { 
    let name = inputPhotoEdit.value.split('\\');
    photoNameEdit.innerHTML = `<p>${name[2]}</p><span id="checked">&#10003</span>`
  }
}

console.log('ENTROU')