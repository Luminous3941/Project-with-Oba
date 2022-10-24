    // VARIABLES
let menu_icon = document.querySelector(".menu");
let nav_container = document.querySelector(".nav_container");




 // EVENT LISTENERS
 menu_icon.addEventListener("click", showmenu);








//  FUNCTIONS

function showmenu(){
    if(nav_container.style.display == "block"){
        nav_container.style.display = "none";
    }else{
        nav_container.style.display = "block";
    }
}



