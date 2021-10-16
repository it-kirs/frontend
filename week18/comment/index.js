const ul = document.querySelector('ul');
document.addEventListener("DOMContentLoaded", function (event) {
    let name= localStorage.getItem('name');
    if (name!=null) {
     document.getElementById('author').value=name;
    }

    let base64String=localStorage.getItem('wallpaper');
    if (base64String!=null) {
        document.getElementById("img_avatar").src = "data:image/png;base64," + base64String;
    }
    let arr;
if (localStorage.getItem('comment')) {
  arr = JSON.parse(localStorage.getItem('comment'))
} else {
  arr = []
}
localStorage.setItem('comment', JSON.stringify(arr));
}); 
let arr = [];
let i=0;
let text;
function comment() {
    let text=document.getElementById('textcomment').value;
    let author=document.getElementById('author').value;
    
    checkSpam(text);
    i=arr.length;
    arr[i]=`${author}: ${cleantext}`;
    //let div = document.createElement('div');
    //div.setAttribute("id", i);  
    document.getElementById('textcomment').value='';
    //div.innerHTML =arr[i];
    //document.getElementById('comment1').appendChild(div);
    createLi(arr[i]);
    if (localStorage.getItem('name')==null){
        localStorage.setItem('name',author);
    }
    //localStorage.setItem('comment',localStorage.getItem('comment')+JSON.stringify(arr[i]));
    localStorage.setItem('comment',JSON.stringify(arr));
    
}
function checkSpam(text) {
    cleantext=text.replace(/xxx|viagra/gi, "***");}
    const data = JSON.parse(localStorage.getItem('comment'));
    
    data.forEach(function(comment) {
        createLi(comment);
    });
    function createLi (commenttext){
        let elemli=document.createElement('li');
        elemli.textContent = commenttext;
        ul.appendChild(elemli);
    }
    //Вставка аватарки
document.getElementById('file').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        localStorage.setItem('wallpaper', base64String);
        document.getElementById("img_avatar").src = "data:image/png;base64," + base64String;
    };
    reader.readAsDataURL(file);
});