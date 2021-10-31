savebtn.onclick= function (e){
    e.preventDefault();

       fetch("https://httpbin.org/post",
       {
           method: 'POST',
           body: new FormData(formId)

       })
       .then(response=>response.json())
       .then(user=>{
           console.log(user);
       })
       .catch(error=>console.log(error));
    
}