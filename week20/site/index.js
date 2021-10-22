document.addEventListener("DOMContentLoaded", function(event) {
    getAPOD();
    getNeo();
});
function getAPOD(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=hZYaPaql7iB82dcsKexVisWxYYJn8x2nZPUGOAmJ')
    .then(response =>response.json()
    .then(apod =>{
        document.getElementById("explanation").innerText=apod.explanation;
        document.getElementById("img1").src=apod.url;
        document.getElementById("title").innerText=apod.title;
    }))
}
function getNeo(startDate,endDate){
    startDate=''
    endDate=''
    fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date='+startDate+'&end_date='+endDate+'&api_key=hZYaPaql7iB82dcsKexVisWxYYJn8x2nZPUGOAmJ') 
    .then(response =>response.json()
    .then(neo=>{
        document.getElementById("count").innerText='Counts of near earth Asteroids today: '+ neo.element_count; 
}))
}