let menu_button = document.querySelector(".menu-btn")
let nav = document.querySelector("nav")

function handleClick() {
    if (menu_button.classList.contains("change")) {
        menu_button.classList.remove("change")
        for (let child of nav.children){
            child.style.display = "none"
        }
    }
    else{
        menu_button.classList.add("change")
        for (let child of nav.children){
            child.style.display = "block"
        }
    }
}

menu_button.addEventListener('click', handleClick)