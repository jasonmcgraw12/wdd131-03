let title = document.querySelector('h1');
console.log(title);
title.textContent = "web page components";

let topic_tilte = document.getElementById("topics");
topic_tilte.style.color = "purple";

let list = document.querySelector('.list');
list.style.border = '3px solid red';

let para = document.querySelector("p");
// para.classList.add("background");

para.style.backgroundColor = ("#000");
// in the above method I can add more to the class

let image = document.querySelector("img");

image.setAttribute("src", "../../mission/byui-logo-blue.webp");
// the above method can get the image data before changing it
image.src = "../../mission/byui-logo-blue.webp";


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.querySelector("#html").style.color = "red";
})
                

const newPara = document.createElement("p");
newPara.innerText = "Added with JavaScript";
document.body.appendChild(newPara);

