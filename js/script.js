const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
]

const carosello = document.querySelector(".carosello")
const nextimg = document.getElementById("nextArrow")
const gallery = document.querySelector(".gallery")
const beforeimg = document.getElementById("beforeArrow")
let counter = 0

for(let i = 0 ; i < images.length; i++){

    const image = images[i]

    carosello.innerHTML += `
    <img src="${image}" class="item hide"> 
    `  
    gallery.innerHTML += `
    <img src="${image}" class="select"> 
    ` 
}

const items = document.getElementsByClassName("item");
items[counter].classList.remove("hide")
const selected = document.getElementsByClassName("select");
selected[counter].classList.add("special")



nextimg.addEventListener("click", function(){

    items[counter].classList.add("hide")
    selected[counter].classList.remove("special")

    counter++;

    if(counter > 4){
        counter = 0
    }

    items[counter].classList.remove("hide")
    selected[counter].classList.add("special")

})


beforeimg.addEventListener("click", function(){

    items[counter].classList.add("hide")
    selected[counter].classList.remove("special")

    counter--;

    if(counter < 0){
        counter = 4
    }

    items[counter].classList.remove("hide")
    selected[counter].classList.add("special")
})