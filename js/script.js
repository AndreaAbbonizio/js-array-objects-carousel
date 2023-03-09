// Dato un array contenente una lista di cinque immagini
// Creare un carosello




const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const textImageContainerEl= document.getElementById("text-image-container");
const topArrowElement = document.getElementById("top-arrow");
const bottomArrowElement = document.getElementById("bottom-arrow");
const activeImgElement = document.getElementById("carousel-img");
const asideContainerElement = document.getElementById("aside-container");

const startAutoplayButton = document.getElementById("start-autoplay");

const stopAutoplayButton = document.getElementById("stop-autoplay");


const invertAutoplayButton = document.getElementById("invert-autoplay");



images.forEach(element => {
    
    // genero un elemento html di tag <div>
    let newImage = document.createElement("img");
    newImage.src = element.image;
    asideContainerElement.append(newImage);
    newImage.classList.add("imageAside");
    newImage.alt = "image aside";
    newImage.style.height = `calc(100% / ${element.length}) `;
});

textImageContainerEl.style.position = "relative";
    
let titleElement;

let textElement;

let index = 0;

const imageAsideElements = document.querySelectorAll(".imageAside");

imageAsideElements[index].classList.add("active");

activeImgElement.src = images[index].image;


titleElement = document.createElement("div");
titleElement.setAttribute("id" , "title-image");
titleElement.innerHTML = images[index].title;
textImageContainerEl.append(titleElement);
console.log(titleElement);


textElement = document.createElement("div");
textElement.setAttribute("id" , "text-image");
textElement.innerHTML = images[index].text;
textImageContainerEl.append(textElement);
console.log(textElement);




topArrowElement.addEventListener("click", function () {

    imageAsideElements[index].classList.remove("active");

    
    if(index == images.length - 1){
        index = 0 - 1;

    }
    
    
    
    index++;

    activeImgElement.src = images[index].image;

    
    titleElement.innerHTML = images[index].title;
    textImageContainerEl.append(titleElement);
    console.log(titleElement);


    textElement.innerHTML = images[index].text;
    textImageContainerEl.append(textElement);
    console.log(textElement);





    imageAsideElements[index].classList.add("active");
  
    console.log(index);




});


bottomArrowElement.addEventListener("click", function () {
    imageAsideElements[index].classList.remove("active");


    if(index == 0){
        index = images.length - 1;
    }else{
        index--;
    }

    

    imageAsideElements[index].classList.add("active");    
    
    activeImgElement.src = images[index].image;
  
    titleElement.innerHTML = images[index].title;
    textImageContainerEl.append(titleElement);
    console.log(titleElement);


    textElement.innerHTML = images[index].text;
    textImageContainerEl.append(textElement);
    console.log(textElement);

    console.log(index);
  
   

});

let autoplay;

let invert;

startAutoplayButton.addEventListener("click", function() {
    autoplay = setInterval(changeImage , 3000);
})


stopAutoplayButton.addEventListener("click" , function() {
    clearInterval(autoplay);
    clearInterval(invert);
})



invertAutoplayButton.addEventListener("click", function(){
    invert = setInterval(invertImage, 3000);
})








function changeImage(){
    imageAsideElements[index].classList.remove("active");

    
    if(index == images.length - 1){
        index = 0 - 1;

    }
    
    
    
    index++;

    activeImgElement.src = images[index].image;

    
    titleElement.innerHTML = images[index].title;
    textImageContainerEl.append(titleElement);
    console.log(titleElement);


    textElement.innerHTML = images[index].text;
    textImageContainerEl.append(textElement);
    console.log(textElement);





    imageAsideElements[index].classList.add("active");
  
    console.log(index);

};


function invertImage(){
    imageAsideElements[index].classList.remove("active");


    if(index == 0){
        index = images.length - 1;
    }else{
        index--;
    }

    

    imageAsideElements[index].classList.add("active");    
    
    activeImgElement.src = images[index].image;
  
    titleElement.innerHTML = images[index].title;
    textImageContainerEl.append(titleElement);
    console.log(titleElement);


    textElement.innerHTML = images[index].text;
    textImageContainerEl.append(textElement);
    console.log(textElement);

    console.log(index);
}