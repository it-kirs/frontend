function check(){
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let mail = document.getElementById("mail");
    let password= document.getElementById("password");
    let confirm = document.getElementById("confirm");

    document.getElementById('errorMessage').innerHTML="";
    document.getElementById('welcome').innerHTML="";
    if (name.value=='') {
    document.getElementById('errorMessage').innerHTML+="Поле Имя не заполнено<br>";
}
    if (surname.value=='') {
    document.getElementById('errorMessage').innerHTML+="Поле Фамилия не заполнено<br>";}
    if (mail.value==''){
    document.getElementById('errorMessage').innerHTML+="Поле Электронная почта не заполнено<br>";
}
    if (password.value==''){
    document.getElementById('errorMessage').innerHTML+="Поле Пароль не заполнено<br>";}
    if (password.value.length < 4 && password.value.length>0){
    document.getElementById('errorMessage').innerHTML+="Длина пароля должна быть не менее 5 символов<br>";}
    if (confirm.value!=password.value && password.value!='' && password.value.length > 4){
        document.getElementById('errorMessage').innerHTML+="Пароли не совпадают. Повторите попытку.<br>";}

    if (name.value!='' && surname.value!=''&& mail.value!='' && (password.value!=''&& password.value.length > 4 && confirm.value==password.value))
     document.getElementById('welcome').innerHTML+=`Добро пожаловать, ${name.value}!`;
}