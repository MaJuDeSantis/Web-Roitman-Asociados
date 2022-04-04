'use strict'


const d = document;
const menuLinks = d.getElementById("menu-links")
const btnOpenMenu = d.getElementById("hmenu-open");
const btnCloseMenu = d.getElementById("hmenu-close");

// Control MENU HAMBURGUESA




d.addEventListener("click", e=>{
    console.log(e.target);


    if (e.target == (btnOpenMenu) || (btnCloseMenu)){

        if (menuLinks.classList.contains("close-menu")){
            //ACTIVAR MENU
            menuLinks.classList.add("open-menu");
            menuLinks.classList.remove("close-menu");

            btnOpenMenu.classList.add("openMenuBtn");
            btnOpenMenu.classList.remove("closeMenuBtn");



        }
        else if (menuLinks.classList.contains("open-menu")){
            //DESACTIVAR MENU
            menuLinks.classList.add("close-menu");
            menuLinks.classList.remove("open-menu");

            btnOpenMenu.classList.remove("openMenuBtn");
            btnOpenMenu.classList.add("closeMenuBtn");



        }
        else {
            btnOpenMenu.classList.add("fade-out-btn");
            //ACTIVAR MENU
            menuLinks.classList.add("open-menu");
            menuLinks.classList.remove("close-menu");

            btnOpenMenu.classList.add("openMenuBtn");


        }



    }

})


/*
btnOpenMenu.classList.add("not-active");
            btnCloseMenu.classList.remove("not-active");

*/