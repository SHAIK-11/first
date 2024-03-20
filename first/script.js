document.addEventListener("DOMContentLoaded", function() {
let btn = document.querySelector(".btn");
let dropdown =document.querySelector(".dropdown-menu");

btn.addEventListener("click", ( ) => {
    dropdown.classList.toggle("show");
})

window.addEventListener("click",(event) =>{

    if(!event.target.matches(".dropdown-menu") && !event.target.matches(".btn")){
            // if (!event.target.closest(".btn-group")) {
    dropdown.classList.remove("show");
    }
});
});