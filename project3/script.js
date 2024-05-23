let hide = document.querySelector(".hide")
let shownav = document.querySelector(".shownav");
let hidenav = document.querySelector(".close-btn");
shownav.addEventListener("click",()=>{
hide.style.display="block";
})

hidenav.addEventListener("click",()=>{
    hide.style.display="none";
})
