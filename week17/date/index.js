function formatDate() {
    
    let date = new Date(document.getElementById('userdate').value);
    let x = new Date() - date;

  if (x< 1000) { 
    return "прямо сейчас";
}
alert( formatDate(new Date(new Date - 1)) ); 