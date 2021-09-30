function sumInput(){
  let numbers=[];
  let num=1;
  while (true){
    num=prompt("Введите числовые значения:");
    if ((num!=null&&num.trim()=="") || num=="" || num==null || !isFinite(num)) break;
    numbers.push(+num);
  }
  numbers.sort(function(a, b){return a - b});
alert(numbers);
  let sum=0;
  for (num of numbers)
  {
    sum+=num
  }
  alert(sum);
}
sumInput();
  