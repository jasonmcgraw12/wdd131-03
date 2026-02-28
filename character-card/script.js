const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    img: "snortleblat.webp"
}

const newCharacter = document.querySelector("div")
newCharacter.innerHTML = `<div class="modal hidden">
        ${character.name} died
        <button id="okay">Okay</button>
    </div>
    <div id="character-card">
        <img src=${character.img} alt="">
        <div id="nameplate">
            <h1>${character.name}</h1>
        </div>
        <div id="card-info">
            <p><span class="info">Class: </span>${character.class}</p>
            <p><span class="info">Level: </span><span id="level">${character.level}</span></p>
            <p><span class="info">Health: </span><span id="health">${character.health}</span></p>
        </div>
        <div id="buttons">
            <button id="attacked">Attacked</button>
            <button id="level-up">Level Up</button>
        </div>
    </div>`;
    
const attackedBtn = document.querySelector("#attacked");
const levelUpBtn = document.querySelector("#level-up");
const levelLabel = document.querySelector("#level");
const healthLabel = document.querySelector("#health");
const okayButton = document.querySelector("#okay");
const deathDisplay = document.querySelector(".modal");

okayButton.addEventListener("click", () => {
    deathDisplay.classList.add("hidden");
    levelLabel.textContent = 5;
    healthLabel.textContent = 100;
})

attackedBtn.addEventListener('click', () =>{
    const curentHealth = parseInt(healthLabel.textContent) - 20;
    healthLabel.textContent = curentHealth;
    if (curentHealth <= 0){
        console.log("dead pop up");
        console.log(deathDisplay);
        deathDisplay.classList.remove("hidden");
    }
});

levelUpBtn.addEventListener('click', () =>{
    const curentLevel = parseInt(levelLabel.textContent) + 1;
    levelLabel.textContent = curentLevel;
});
