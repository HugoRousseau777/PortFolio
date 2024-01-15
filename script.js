let experiences = document.querySelectorAll('.experience');
let projets = document.querySelectorAll('.projets');

let titres = document.querySelectorAll('h4');
let batons = document.querySelectorAll('.baton');
let liste = document.querySelectorAll('li');
let sommaire = document.querySelectorAll(".baton");
let ancres = document.querySelectorAll(".ancre");

document.getElementById("presentation").addEventListener("mouseenter", (e)=> {
    sommaire[0].style.scale = "1.5";
    sommaire[0].style.borderTop = "2px solid white";
    sommaire[0].querySelector("a").style.color = "white";
});
document.getElementById("experiences").addEventListener("mouseenter", (e)=> {
    sommaire[1].style.scale = "1.5";
    sommaire[1].style.borderTop = "2px solid white";
});
document.getElementById("projets").addEventListener("mouseenter", (e)=> {
    sommaire[2].style.scale = "1.5";
    sommaire[2].style.borderTop = "2px solid white";
});
document.getElementById("presentation").addEventListener("mouseleave", (e)=> {
    sommaire[0].style.scale = "1";
    sommaire[0].style.borderTop = "1px solid rgb(129, 151, 189)";
});
document.getElementById("experiences").addEventListener("mouseleave", (e)=> {
    sommaire[1].style.scale = "1";
    sommaire[1].style.borderTop = "1px solid rgb(129, 151, 189)";
});
document.getElementById("projets").addEventListener("mouseleave", (e)=> {
    sommaire[2].style.scale = "1";
    sommaire[2].style.borderTop = "1px solid rgb(129, 151, 189)";
});

experiences.forEach(experience => {
    experience.addEventListener("mouseenter", (e) => {
        experience.style.borderRadius = "15px";
        experience.style.backgroundColor = "rgb(24, 38, 73)";
        
        experience.querySelector("h3").style.color = "rgb(83, 211, 213)"; /*Utiliser experience.querySelector permet d'avoir le premier h3 de chaque expérience plutôt */ 
      });
    experience.addEventListener("mouseleave", (e) => {
        experience.style.backgroundColor = "rgb(14, 23, 42)";
        experience.style.opacity = "1";
        experience.querySelector("h3").style.color = "rgb(255, 255, 255)";
      });
})
projets.forEach(projet => {
    projet.addEventListener("mouseenter", (e) => {
        projet.style.borderRadius = "15px";
        projet.style.backgroundColor = "rgb(24, 38, 73)";
        
        projet.querySelector("h3").style.color = "rgb(83, 211, 213)"; /*Utiliser experience.querySelector permet d'avoir le premier h3 de chaque expérience plutôt */ 
      });
    projet.addEventListener("mouseleave", (e) => {
        projet.style.backgroundColor = "rgb(14, 23, 42)";
        projet.style.opacity = "1";
        projet.querySelector("h3").style.color = "rgb(255, 255, 255)";
      });
})

ancres.forEach(ancre => {
    ancre.addEventListener("mouseenter", (e)=> {
       /*ancre.querySelector(".baton").style.width = "15%";*/
       ancre.querySelector(".baton").style.scale = "1.5";
        ancre.querySelector(".baton").style.borderTop = "2px solid white";
        ancre.querySelector("a").style.color = "white";
    })
    ancre.addEventListener("mouseleave", (e)=> {
        ancre.querySelector(".baton").style.scale = "1";
        ancre.querySelector(".baton").style.borderTop = "1px solid rgb(129, 151, 189)";
        ancre.querySelector("a").style.color = "rgb(129, 151, 189)";
    })
})



