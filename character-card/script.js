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