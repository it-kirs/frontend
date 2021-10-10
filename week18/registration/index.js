/*function check(){
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
function ValidateEmail(emailField) {
    var mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (emailField.value.match(mailFormat)) {
        return true;
    }
    else {
        alert("Ваш адрес электронной почты введен неверно!");
        return false;
    }
}
*/

let errors=[];
function checkValidity(input){
    let validity = input.validity;
    if (validity.valueMissing)
    {errors.push('Поле '+input.placeholder+' не заполнено');}
    if (validity.patternMismatch) 
		{ errors.push('Неверный формат заполнения'); }
    
	if (validity.rangeOverflow) 
		{ let max = input.max;
			errors.push('Максимальное значение не может быть больше чем ' + max); }
    
	if (validity.rangeUnderflow) 
		{ let min = input.min;
			errors.push('Минимальное значение не может быть меньше чем ' + min); }       
    
}
function checkAll() {
    errors=[];
    let inputs=document.querySelectorAll("input");
    for (let input of inputs){
        checkValidity(input);
    }
    let password= document.getElementById("password");
    let confirm = document.getElementById("confirm");
    if (confirm.value!=password.value &&confirm.value!='') 
        {errors.push('Пароли не совпадают. Повторите попытку.');}

    document.getElementById('errorInfo').innerHTML=errors.join('. <br>');
    
} 

