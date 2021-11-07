function search() {
    let phrase=document.getElementById("search").value;
    if (phrase=='') {
        alert('Enter a word or phrase');}
    else {   
    fetch("https://api.giphy.com/v1/gifs/search?api_key=IuZJBI8JmPrHBOiRTyc7wAt4coqXaKli&q="+phrase+"&limit=5&offset=0&rating=g&lang=en")
    .then(response=>response.json())
    /*.then(response => {
        if (response.status ='403') {
            throw new Error("Authorisation Error");
        } 
        return response;
    })*/
    .then((res) => {
        if (res.data=[]) {
            throw new Error("Gifs not found");
        }
        return response;
    })
   /* .then((res) => {
        if (res.headers['content-type'] !== 'application/json') {
            let error = new Error('Некорректный ответ от сервера');
            error.response = res;
            throw error
        }
        
        return res;
    })
    .then(response => {    
        if (response.status == 200) {
          return response.json();            
        } else {
          throw new Error('test err');
        }
      })*/
    .then(gif=>{
        for (let i=0; i<5; i++) {
        let newGif=document.createElement("img");
        newGif.setAttribute("src",gif.data[i].images.original.url);
        document.getElementById("mygif").appendChild(newGif);    
                                 }
                })  
    .catch(err => console.log(err));
}
}