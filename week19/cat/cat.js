class Cat {
    constructor(petsname,name,country,city,email,breed,food,sex,comment){
        this.petsname=petsname;
        this.name=name;
        this.country=country;
        this.city=city;
        this.email=email;
        this.breed=breed;
        this.food=food;
        this.sex=sex;
        this.comment=comment;
        this.foto=foto;
    }
}

function createObject() {
let petsname=document.getElementById('petsname').value
let name=document.getElementById('name').value
let country=document.getElementById('country').value
let city=document.getElementById('city').value
let email=document.getElementById('email').value
let sel = document.getElementById('breed');
let breed = sel.options[sel.selectedIndex].text;

const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
let arr = [];
checkboxes.forEach((checkbox) => {
    arr.push(checkbox.value);
});
let food=arr;
let sex=document.querySelector('input[name="sex"]:checked').value;
let comment=document.getElementById('comment').value;
let foto=document.getElementById('foto').files.name;

let myCat = new Cat(petsname,name,country,city,email,breed,food,sex,comment,foto);
console.log(myCat);
}