
////// FOLLOWING MOUSE //////

let mouseCursor = document.querySelector(".cursor");

window.addEventListener('mousemove',cursor);

function cursor (e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

/////// Cursor Style //////

let navLinks = document.querySelectorAll(".nav-links li");
console.log(navLinks)


navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        mouseCursor.classList.add ('link-grow');
        link.classList.add("hovered-link");
    });

    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove ('link-grow');
        link.classList.remove("hovered-link");
    });



})


////// DARKMODE //////
const darkMode = document.getElementById('dark-mode');

darkMode.addEventListener('change', ()=> {
    document.body.classList.toggle('dark');
})

////// SCROLL EVENT /////

const nav = document.querySelector(".nav-links")
const sub0 = document.getElementById("sub0")
const sub1 = document.getElementById("sub1")
const sub2 = document.getElementById("sub2")
const sub3 = document.getElementById("sub3")

window.addEventListener("scroll", () =>{
        if(window.scrollY > 560){
        nav.style.top = "50px";
        nav.style.position = "fixed"
        nav.style.display = "block"
        nav.style.background = "rgba(114, 153, 114, 0.732)"
        nav.style.borderRadius = "4px"
        sub0.style.position = "relative"
        sub1.style.position = "relative"
        sub2.style.position = "relative"
        sub3.style.position = "relative"
        nav.style.color="white"
        } else {
                nav.style.top = "auto";
                nav.style.position = "relative"
                nav.style.display = "flex"
                sub0.style.position= "absolute";
                sub1.style.position= "absolute";
                sub2.style.position= "absolute";
                sub3.style.position= "absolute";
                nav.style.background= "none"
                nav.style.borderRadius= "none"
                nav.style.color=""
        }});
