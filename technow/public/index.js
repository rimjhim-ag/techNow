






















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

$(function(){
    $("#main-body").load("topic.html");
});


$(function(){
    $("#footer").load("footer2.html");
});







const hamburger = document.querySelector(".hamburger");

if (hamburger) { // Check if the element is found
    hamburger.addEventListener("click", function() {
        const navBar = document.querySelector("nav");
        if (navBar) { // Check if the element is found
            navBar.classList.toggle("on");
        }
    });
}



// feed
const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click', function(){
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTimes.addEventListener('click', function(){
    if(btnHam.className !== ""){
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})





