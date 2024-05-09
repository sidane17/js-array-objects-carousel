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
        image: 'img/05.webp ',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }];

let b= document.getElementById("bs");
let f= document.getElementById("be");
let c= document.getElementsByClassName("slide_img");
let z=document.getElementById("container_slide");
let conta=0; 
let p=document.getElementById("previw");
for(let i=0;i<images.length;i++){
    p.innerHTML+= `<img src="/${images[i].image}" alt="" class="image_previw opacity" id="op" />`
}
let op=document.getElementsByClassName("image_previw");

b.onclick=function(){
    document.getElementById("container_slide").innerHTML=`<img src="${images[conta].image}" alt=""class="slide_img none"/>`
    
    console.log(b);
    if(conta==0){
         conta=4;
    }else{
        conta-=1;
    }
    document.getElementById("container_slide").innerHTML=`<img src="${images[conta].image}" alt=""class="slide_img"/>`
    op[conta].classList.remove("opacity");
    op[conta+1].classList.add("opacity");
}
f.onclick=function(){
    document.getElementById("container_slide").innerHTML=`<img src="${images[conta].image}" alt="" class="slide_img none " />`
    
    if(conta==4){
         conta=0;
         console.log(conta)
     }else{
         conta+=1;
         console.log(conta)
     }
     document.getElementById("container_slide").innerHTML=`<img src="${images[conta].image}" alt="" class="slide_img  " />`
     op[conta].classList.remove("opacity");
     op[conta-1].classList.add("opacity");
}




    