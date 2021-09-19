function changecolor() {
    switch(document.getElementById("theme").value){
        case "light": document.body.style.backgroundColor = "#E6E6FA"; break;
        case "dark": document.body.style.backgroundColor = "#2F4F4F"; break;
        case "blue": document.body.style.backgroundColor = "#ADD8E6"; break;     
    }
}