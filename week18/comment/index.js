document.addEventListener("DOMContentLoaded", function (event) {
    let name= localStorage.getItem('name');
    if (name!=null) {
     document.getElementById('author').value=name;
    }
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
    let div = document.createElement('div');
    div.setAttribute("id", i);  
    document.getElementById('textcomment').value='';
    div.innerHTML =arr[i];
    document.getElementById('comment1').appendChild(div);
    if (localStorage.getItem('name')==null){
        localStorage.setItem('name',author);
    }
   
}
function checkSpam(text){
    cleantext=text.replace(/xxx|viagra/gi, "***");
}
