document.getElementById('brand').onchange = function() {
    const value = document.getElementById('brand').value
    const model_audi = [[1000000,'A3'],[1500000,'A7'],[2000000,'A8']]
    const model_bmw = [[2000000,'X3'],[3000000,'X5'],[4000000,'X6']]
    const model_mercedes = [[2500000,'GLC'],[3000000,'EQS'],[4500000,'CLA']]
    
    
    let values=[]
    let select = document.getElementById('model')
    select.innerHTML=''
  
    if(value==0){
      select.disabled=true
      return
    }
    else if(value==1){
      values = [...model_audi]
    }
    else if(value==2){
      values = [...model_bmw]
    }
    else if(value==3){
        values = [...model_mercedes]
      }
     
    select.disabled=false
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val[0];
        option.text = val[1];
        select.appendChild(option);
    }

}


//document.getElementById('calc').onchange = () =>{
    function carcalc(){
  const value = document.getElementById('brand').value
  if(value==0){
    document.getElementById('container').innerHTML=''
    return
  }
  else{
    const initialPrice = document.getElementById('model').value;
    const engine = document.querySelectorAll('input[name=engine]:checked')[0].value
    const color = document.querySelectorAll('input[name=color]:checked')[0].value
    const insurance = document.getElementById('insurance')
    const upscaleinsurance = insurance.checked? insurance.value: 0;
    const antilock = document.getElementById('antilock')
    const upscaleantilock = antilock.checked? antilock.value: 0;
    const airbag = document.getElementById('airbag')
    const upscaleairbag = airbag.checked? airbag.value: 0;
    const nightvision = document.getElementById('nightvision')
    const upscalenightvision = nightvision.checked? nightvision.value: 0;
    const blindspots = document.getElementById('blindspots')
    const upscaleblindspots = blindspots.checked? blindspots.value: 0;
    const yearprice = document.getElementById('year').value;
    document.getElementById('container').innerText= `Стоимость авто составляет: ${Number(initialPrice) + Number(engine) + Number(color) + Number(upscaleantilock) + Number(upscaleinsurance) + Number(upscaleairbag) + Number(upscalenightvision) + Number(upscaleblindspots) + Number(yearprice)}р.`
  }
  
}
