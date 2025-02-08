var yes = document.querySelector("#yes");
var no = document.querySelector("#no");


var chngtxt = document.querySelector("#luv");
var gayab = document.querySelector("#no");

let name = prompt("Can i know your sweet name plzz ?").toUpperCase()




yes.addEventListener("click", ()=> {
    chngtxt.innerHTML = `I LOVE YOU TOO <span id ="nam"> ${name} <span> 😍🥰`
    no.style.display = "none"
    yes.style.display = "none"
    chngtxt.style.color = "yellow";
    yes.classList.add("shake");
    setTimeout(() => {
        yes.classList.remove("shake");
    }, 1000);
    
})

no.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - no.offsetWidth);
    const y = Math.random() * (window.innerHeight - no.offsetHeight);
    
    no.style.position = "absolute";
    no.style.left = `${x}px`;
    no.style.top = `${y}px`;
    yes.style.fontSize = "1.3rem"

    no.classList.add("shake");
    setTimeout(() => {
        no.classList.remove("shake");
    }, 500);
});

// no.addEventListener("click", ()=> {
//     chngtxt.textContent = " WHY "
//     transformTranslate = "(50px, 50px)";

// })

