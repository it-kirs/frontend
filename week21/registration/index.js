
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
    if (errors.length==0)
    return (true);
    
} 

btn.onclick= function (e){
    e.preventDefault();
    checkAll();
    if(checkAll()){
    let user ={
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        mail: document.getElementById("mail").value,
        password: document.getElementById("password").value
       }
       fetch("https://httpbin.org/post",
       {
           method: 'POST',
           body: JSON.stringify(user),
           headers: {
            'Content-Type': 'application/json;charset=utf-8'
           },

       })
       .then(response=>response.json())
       .then(user=>{
           console.log(user);
       })
       .catch(error=>console.log(error));
    }
}