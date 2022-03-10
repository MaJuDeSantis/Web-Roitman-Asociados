const menu = document.getElementById('hamburger-menu');
const menuOpen = document.getElementById('hamburger-menuOpen');
const menuClose = document.getElementById('hamburger-menuClose');

console.log(menuOpen)

menuOpen.addEventListener('click', ()=>{
    menu.classList.add('-isActive');
    menu.classList.add('openMenuH');
    menu.classList.remove('closeMenuH');
    menuOpen.classList.remove('-isActive');
    menuClose.classList.add('-isActive');
});

menuClose.addEventListener('click', ()=>{
    menu.classList.add('closeMenuH');
    menu.classList.remove('openMenuH');
    menu.classList.remove('-isActive');
    menuOpen.classList.add('-isActive');
    menuClose.classList.remove('-isActive');
});