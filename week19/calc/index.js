class Calc {
    static stSum(a,b){
        return (a+b);
    }
    static stSub(a,b){
        return (a-b);
    }
    static stMultiply(a,b){
        return (a*b);
    }
    static stDivide(a,b) {
        if (b!=0)
        return(a/b);
        else return("На ноль делить нельзя!");

    }
}

function sum() {
    document.getElementById('result').innerHTML=Calc.stSum(Number(document.getElementById('number1').value),Number(document.getElementById('number2').value));  
}
function sub() {
    document.getElementById('result').innerHTML=Calc.stSub(Number(document.getElementById('number1').value),Number(document.getElementById('number2').value));  
}
function multiply() {
    document.getElementById('result').innerHTML=Calc.stMultiply(Number(document.getElementById('number1').value),Number(document.getElementById('number2').value));
}
function divide() {
    document.getElementById('result').innerHTML=Calc.stDivide(Number(document.getElementById('number1').value),Number(document.getElementById('number2').value));
}