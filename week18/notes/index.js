const ul = document.querySelector('ul');
let notesArr;
if (localStorage.getItem('notes')) {
  notesArr = JSON.parse(localStorage.getItem('notes'))
} else {
  notesArr = []
}
localStorage.setItem('notes', JSON.stringify(notesArr));
const data = JSON.parse(localStorage.getItem('notes'));

function createLi (text){
    let elemli=document.createElement('li');
    elemli.textContent = text;
    ul.appendChild(elemli);
}

const input = document.getElementById('note');

document.getElementById('button2').addEventListener('click', function () {
    notesArr.push(input.value);
    localStorage.setItem('notes', JSON.stringify(notesArr));
    createLi(input.value);
    input.value = "";
  });

data.forEach(function(note) {
    createLi(note);
});

document.getElementById('button').addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  notesArr = [];
});