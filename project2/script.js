let stranger=document.querySelector("#Stranger");
let btn=document.querySelector(".btn");
let button=document.querySelector("button");
let check=0 //stranger
btn.addEventListener("click",()=>{
    if(check===0){
        check=1;
        stranger.innerHTML="Friend";
        button.innerText="Remove Friend"
    }
    else{
        check=0;
        stranger.innerHTML="Stranger";
        button.innerText="Add Friend"
    }
})