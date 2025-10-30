const about = document.querySelector(".aboutUs")
const about_list = document.querySelector(".about_us_list")

const mobile_list = document.getElementsByClassName("third_nav_mobile_list")
about.addEventListener("mouseenter", function () {
    about_list.style.display = "initial"
})
about.addEventListener("mouseleave", function () {
    about_list.style.display = "none"
})
// about_list.addEventListener("mouseleave", function () {
//     about_list.style.display = "none"
// })


var a = document.querySelector(".third_nav_mobile_list")
var c = document.querySelector("#nav_bar")
var d = document.querySelector("#x_icon1")
c.addEventListener("click", function () {
    a.style.display = "flex"
    setTimeout(() => {
        c.style.transition = "all 0.4s ease"
        c.style.transform = " scale(0)"
       d.style.transition = "all 0.4s ease"
        d.style.transform = " scale(1)"
        
    }, 10);
    
})
d.addEventListener("click", function () {
    a.style.display = "none"
    setTimeout(() => {
        c.style.transition = "all 0.4s ease"
        c.style.transform = " scale(1)"
         d.style.transition = "all 0.2s ease"
        d.style.transform = " scale(0)"
        
    }, 10);
})

var box1 = document.querySelector(".scheme")
var box2 = document.querySelector(".library")
var box3 = document.querySelector(".laboratories")

box1.addEventListener("mouseenter", function () {
    box1.style.transform = "scale(1.02)"
    box1.style.transition = " all 0.1s ease-in-out";


})

box1.addEventListener("mouseleave", function () {
    box1.style.transform = "scale(1)"
    box1.style.transition = " all 0.1s ease-in-out";

})
box2.addEventListener("mouseenter", function () {
    box2.style.transform = "scale(1.02)"
    box2.style.transition = " all 0.1s ease-in-out";

})

box2.addEventListener("mouseleave", function () {
    box2.style.transform = "scale(1)"
    box2.style.transition = " all 0.1s ease-in-out";
})

box3.addEventListener("mouseenter", function () {
    box3.style.transform = "scale(1.02)"
    box3.style.transition = " all 0.1s ease-in-out";

})

box3.addEventListener("mouseleave", function () {
    box3.style.transform = "scale(1)"
    box3.style.transition = " all 0.1s ease-in-out";
})
















