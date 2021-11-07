function search() {
    try {
        if (!window.navigator.onLine) {
            throw new Error("Internet connection problem");
        }   
        else {
            let phrase=document.getElementById("search").value;
            if (phrase=='') {
                alert('Enter a word or phrase');}
            else {     
            fetch("https://api.giphy.com/v1/gifs/search?api_key=IuZJBI8JmPrHBOiRTyc7wAt4coqXaKli&q="+phrase+"&limit=5&offset=0&rating=g&lang=en")
            .then(response => {
                if (response.status == 403) {
                throw new Error("Authorization Error");
                } 
            return response;
            })    
            .then(response=>response.json())
            .then(response => {
                if ((response.meta.status == 200) && (response.data.length === 0)) {
                throw new Error("Gifs not found");
            }
            return response;
            })
            .then(gif=>{
            document.getElementById("mygif").innerHTML = "";   
            for (let i=0; i<5; i++) {
                let newGif=document.createElement("img");
                newGif.setAttribute("src",gif.data[i].images.original.url);
                document.getElementById("mygif").appendChild(newGif);    
                }
            })
            .catch((err) => {
                alert(err);
                console.log(err);
            });
            //.catch(err => alert(err));
            }
        }
    }
    catch (error){
        console.log(error.message);
        alert(error.message);
    }
}