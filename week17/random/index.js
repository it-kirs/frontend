let arr=[];
function generate() {
    for (let i=0; i<10; i++) {
    arr[i]=Math.round((Math.random()*21) -10)
    }
    let nummin=Math.min(...arr);
    let nummax=Math.max(...arr);
    let numsum=0;
    let nummult=1;
    for (let i=0; i<10; i++) {  
        numsum+=arr[i]
        nummult*=arr[i]
        }
    let numavg=numsum/10; 
    
    document.getElementById('generated').innerText=`Сгенерировали: ${arr}`;
    document.getElementById('min').innerText=`Минимальное: ${nummin}`;
    document.getElementById('max').innerText=`Максимальное: ${nummax}`;
    document.getElementById('average').innerText=`Среднее арифметическое: ${numavg}`;
    document.getElementById('sum').innerText=`Сумма чисел: ${numsum}`;
    document.getElementById('mult').innerText=`Произведение чисел: ${nummult}`;
    
       
}
