const header = document.querySelector("header")

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
})

let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");
let fundoheader = document.querySelector('header')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('active');
    fundoheader.classList.toggle('active')

}