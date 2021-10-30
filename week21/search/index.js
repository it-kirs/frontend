function search() {
    let phrase=document.getElementById("search").value;
    //fetch("https://api.giphy.com/v1/gifs/search?api_key=IuZJBI8JmPrHBOiRTyc7wAt4coqXaKli&q="+phrase+"&limit=5&offset=0&rating=g&lang=en",
    fetch("https://api.giphy.com/v1/gifs/search?api_key=IuZJBI8JmPrHBOiRTyc7wAt4coqXaKli&q=cat&limit=1&offset=0&rating=g&lang=en",
    /*{headers: {
        'Access-Control-Allow-Origin':'*'
      }}*/
    )
    .then(response=>response.json())
    .then(gif=>{
        //console.log(gif.data[0].url)
        document.getElementById("gif").src=gif.data[0].embed_url;
        
    })
    .catch(err => console.log(err));
}