function search() {
    let phrase=document.getElementById("search").value;
    fetch("https://api.giphy.com/v1/gifs/search?api_key=IuZJBI8JmPrHBOiRTyc7wAt4coqXaKli&q="+phrase+"&limit=5&offset=0&rating=g&lang=en",
    )
    .then(response=>response.json())
    .then(gif=>{
        for (let i=0; i<5; i++) {
        let newGif=document.createElement("img");
        newGif.setAttribute("src",gif.data[i].images.original.url);
        document.getElementById("mygif").appendChild(newGif);    
        }
    })
    .catch(err => console.log(err));
}