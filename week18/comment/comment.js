const text = document.getElementById('textcomment').value;
const ul = document.querySelector('ul');
let notesArr;
if (localStorage.getItem('notes')) {
  notesArr = JSON.parse(localStorage.getItem('notes'))
} else {
  notesArr = []
}
function comment() {
    checkSpam(text);
    notesArr.push(cleantext);
    localStorage.setItem('notes', JSON.stringify(notesArr));
    createLi(cleantext);
    cleantext = "";
}

function createLi (cleantext){
    let elemli=document.createElement('li');
    elemli.textContent = cleantext;
    ul.appendChild(elemli);
}

  function checkSpam (text) {
    cleantext=text.replace(/xxx|viagra/gi, "***");}