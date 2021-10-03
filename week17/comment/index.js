let arr = [];
let i=0;
let text;
function comment() {
    let text=document.getElementById('textcomment').value;
    checkSpam(text);
    i=arr.length;
    arr[i]=`Guest: ${cleantext}`;
    let div = document.createElement('div');
    div.setAttribute("id", i);  
    document.getElementById('textcomment').value='';
    div.innerHTML =arr[i];
    document.getElementById('comment1').appendChild(div);
   
}
function checkSpam(text){
    cleantext=text.replace(/xxx|viagra/gi, "***");
}
