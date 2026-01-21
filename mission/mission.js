
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    console.log(current)
    if (current == 'dark') {
        document.body.style.backgroundColor = "#000000";
        let whiteText = document.querySelectorAll("h1, h2, hr, p");
        document.body.style.color = "#c8d1d6";
        let img = document.getElementById("logo");
        img.src = "byui-logo-white.png";
    } else {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        let img = document.getElementById("logo")
        img.src = "byui-logo-blue.webp";
    }
}           
                    