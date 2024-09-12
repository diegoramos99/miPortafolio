let burger=document.querySelector(".bi-list")
let menu=document.querySelector(".menu_mobile")
let cruz=document.querySelector(".bi-x-lg")
console.log(menu);

burger.addEventListener("click",()=>{
   burger.style.display="none"
   menu.style.display="block"
   menu.style.top="0"
})
console.log(cruz);

cruz.addEventListener("click",()=>{
    burger.style.display="block"
   
       menu.style.top="-100%"
})