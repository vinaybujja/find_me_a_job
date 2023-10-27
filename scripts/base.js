const sticky_header = document.querySelector(".sticky-header")
const nonsticky_logo_name = document.querySelector(".nonsticky-logo-name")
const sticky_logo_name = document.querySelector(".sticky-logo-name")
const nonsticky_logo = document.querySelector(".nonsticky-logo")
const sticky_logo = document.querySelector(".sticky-logo")
const hamburger = document.querySelector("#hamburger")
const cross = document.querySelector("#cross")
const nav_list = document.querySelectorAll(".nav-list-item")
const navbar = document.querySelector(".nav-list")
const mobile_navbar = document.querySelector(".mobile-navbar")
const _red = "#ED2647"
const _white = "#ffffff"


window.addEventListener("scroll",()=>
{
    if(Math.round(window.scrollY) >= sticky_header.offsetTop)
    {
        sticky_header.style.backgroundColor = "red"
        sticky_header.style.position = "sticky"
        sticky_header.style.top = 0
        nonsticky_logo_name.style.display = "none"
        nonsticky_logo.style.display = "none"
        sticky_logo.style.display = "flex"
        sticky_logo_name.style.display = "flex"
        hamburger.classList.remove("red")
        hamburger.classList.add("white")
        cross.classList.remove("red")
        cross.classList.add("white")
        mobile_navbar.style.backgroundColor = _red
        nav_list.forEach(item => {
            item.classList.remove("red")
            item.classList.add("white")
        })

    }
    else
    {
        sticky_header.style.backgroundColor = "transparent"
        nonsticky_logo_name.style.display = "flex"
        nonsticky_logo.style.display = "flex"
        sticky_logo.style.display = "none"
        sticky_logo_name.style.display = "none"
        hamburger.classList.remove("white")
        hamburger.classList.add("red")
        cross.classList.remove("white")
        cross.classList.add("red")
        mobile_navbar.style.backgroundColor = _white
        nav_list.forEach(item => {
            item.classList.remove("white")
            item.classList.add("red")
        })
    }
    if(window.innerWidth<700)
    {
        nonsticky_logo.style.display = "none"
        sticky_logo_name.style.display = "none"
    }
}   
)
hamburger.addEventListener("click",()=>{
    mobile_navbar.style.display = (mobile_navbar.style.display == "flex")? "none":"flex"
})
cross.addEventListener("click",()=>{
    mobile_navbar.style.display = (mobile_navbar.style.display == "flex")? "none":"flex"
})