const images = document.querySelector("#images");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const modalButton = modal.querySelector(".close-viewer");
const menu_button = document.querySelector("#hamberger-menu")
const nav = document.querySelector("nav")

function openModal(e){
    console.log(e.target);
    const new_src = e.target.src.replace("sm", "full");
    modalImage.src = new_src;
    modal.showModal();
}

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

images.addEventListener('click', openModal);

menu_button.addEventListener('click', handleClick)

modalButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal){
        modal.close();
    }
});