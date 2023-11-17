// for links 

let links = document.querySelectorAll(".links a");
let bodyId = document.querySelector("body").id;

for(let link of links){
    if(link.dataset.active == bodyId){
        link.classList.add("current");
    }
}



// for nav-bar

$(function(){
    $("#nav-bar").load("header.html");
});



const hamburger = document.querySelector(".hamburger");
        hamburger.addEventListener("click", function() {
            const navBar = document.querySelector("nav");
            navBar.classList.toggle("on");
        });



