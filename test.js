let json='[mo9u9u9hnn]';
try{
if () {
throw new SyntaxError("Формат данных некорректный"); 
}
console.log(JSON.parse(json));
}
catch (error){
    console.log("Произошла ошибка:" + error.message);
}
/*
let json = '{ "age": 30 }'; // данные неполны

try {

  let user = JSON.parse(json); // <-- выполнится без ошибок

  if (!user.name) {
    //throw new SyntaxError("Данные неполны: нет имени"); // (*)
	}

  alert( user.name );

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: Данные неполны: нет имени
}


let json = '{ "age": 30 }'; // данные неполны
try {
  let user = JSON.parse(json); // <-- выполнится без ошибок
  alert( user.name );

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: Данные неполны: нет имени
}
*/
let a='nnn';
try{   
    if (isNaN(age)==true) {
        throw new SyntaxError("Неверный формат данных");
        }  
console.log(age);
}
catch (error){
    console.log("Произошла ошибка: " + error.message);}
    

    try {   
        let a=parseInt('ыыыы');
        if (isNaN(a)) {
            throw new Error("некорректное преобразование данных");
            } 
        console.log(a);
    }
    catch (error){
        console.log("Произошла ошибка: " + error.message);}

        a=parseInt('ыыыы');
        console.log(a);
