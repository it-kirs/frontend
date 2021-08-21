function sum() {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    let sum_ab = Number(a)+Number(b);
    document.getElementById('result').innerHTML="Результат: "+sum_ab;
}
function sub() {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    let sub_ab = Number(a)-Number(b);
    document.getElementById('result').innerHTML="Результат: "+sub_ab;
}
function multiply() {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    let mult_ab = Number(a)*Number(b);
    document.getElementById('result').innerHTML="Результат: "+mult_ab;
}
function divide() {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    let div_ab = Number(a)/Number(b);
    document.getElementById('result').innerHTML="Результат: "+div_ab;
}
