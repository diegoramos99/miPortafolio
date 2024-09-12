let burger=document.querySelector(".bi-list")
let menu=document.querySelector(".menu_mobile")
let cruz=document.querySelector(".bi-x-lg")

let ol=document.querySelector(".items-menu")
let li=ol.querySelectorAll("li")
burger.addEventListener("click",()=>{
   burger.style.display="none"
   menu.style.display="block"
   menu.style.top="0"
})

cruz.addEventListener("click",()=>{
    burger.style.display="block"
   
       menu.style.top="-100%"
})

li.forEach(element => {
let a=element.querySelector("a")
a.addEventListener('click',()=>{
    menu.style.top="-100%"
    burger.style.display="block"
})
});

