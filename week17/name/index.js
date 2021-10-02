function parsName (event) {
    if (event.which == 13 || event.keyCode == 13) {
    let full=document.getElementById('fullname').value;
    full=full.replace(/\s+/g, ' ').trim()
    let arr=full.split(" ");
    
    for (let i=0; i<3; i++){
        let strinit=arr[i];
        let str=strinit.toLowerCase();
        let first=str[0].toUpperCase();
        let newstr=str.replace(str[0],first);
        arr[i]=newstr;
    }
    
    s=arr[0];
    n=arr[1]
    p=arr[2]
    document.getElementById('surname').value=s
    document.getElementById('name').value=n
    document.getElementById('patronymic').value=p

}
}
