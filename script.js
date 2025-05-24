 const MenuBtn = document.querySelector('#menu-btn')
 const navMenu= document.querySelector('#nav-menu')

 MenuBtn.addEventListener('click', ()=> {
    navMenu.classList.toggle('hidden')
 })