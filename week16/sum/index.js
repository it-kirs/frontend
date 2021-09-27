/*let num;
function sumInput(){
    num=prompt("Введите значения:");
    //alert(num);
}
do {sumInput();}
while (num!="" && num!=null)*/
///////////////////////
function sumInput(){
    let numbers=[];
    let num;
do {
    num=prompt("Введите числовые значения:");
    numbers.push(+num);
}
while (num!="" && num!=null)}
alert( sumInput() );

///////////////////////////////
function sumInput(){
  let numbers=[];
  let num;
  while (num!="" && num!=null){
    num=prompt("Введите числовые значения:");
    if (num=="" || num==null || !isFinite(num)) break;
    numbers.push(+num);
  }
alert(numbers);
}
alert( sumInput());
//////////////////////////////
    numbers.push(prompt("Введите значения:"));
    alert(numbers);
  }
  do {sumInput();}
while (numbers!="" || numbers!=null || typeof numbers!='string')

//////////////////////////////////////////////////
function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Введите число", 0);
  
      // Прекращаем ввод?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );
  /////////////////////////
  function sumInput(){
    let numbers=[];
    let num=1;
    while (num!="" && num!=null && isFinite(num)){
      num=prompt("Введите числовые значения:");
      if (num=="" || num==null || !isFinite(num)) break;
      numbers.push(+num);
    }
    numbers.sort(function(a, b){return a - b});
  alert(numbers);
    let sum=0;
    for (num of numbers)
    {sum+=num
    }
    return sum;
  }
  alert(sumInput());