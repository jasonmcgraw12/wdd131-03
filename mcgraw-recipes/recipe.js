const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const recipeTitle = urlParams.get('page'); 
const ingredientSections = document.getElementById("ingredients")
const recipeImage = document.getElementById("image-div")
const instructions = document.querySelector("#instructions ol")
const recipeHeadder = document.querySelector("h2")

function renderRecipe(recipe) {
    // render image
    let newHTML = `<img src=${recipe.img} alt=${recipe.imgalt}>`
    recipeImage.innerHTML = newHTML
    // render ingredients
    newHTML = ``
    recipe.sections.forEach(section => {
        const sectionName = `<h3>${section.sectionName}</h3>`
        const ingredientSection = document.createElement("div")
        ingredientSection.classList.add("section")
        ingredientSection.innerHTML = sectionName
        let ingredientNames = ``
        section.ingredients.forEach(ingredient => {
            const ingredientLabel = document.createElement("label")
            const ingredientInput = document.createElement("input")
            const ingredientSpan = document.createElement("span")
            ingredientLabel.classList.add("ingredient")
            ingredientInput.type = "checkbox"
            ingredientInput.addEventListener("click", (event) => {
                if (event.target.checked){
                    ingredientSpan.classList.add("crossed-out")
                }
                else{
                    ingredientSpan.classList.remove("crossed-out")
                }
            })
            ingredientSpan.classList.add("ingredient-text")
            ingredientSpan.textContent = ingredient
            ingredientLabel.appendChild(ingredientInput)
            ingredientLabel.appendChild(ingredientSpan)
            ingredientSection.appendChild(ingredientLabel)
        })
        ingredients.appendChild(ingredientSection)
    })
    // render instructions
    newHTML = ``
    recipe.instructions.forEach(instruction => {
        newHTML += `<li>${instruction}</li>`
    })
    instructions.innerHTML = newHTML;
}

function init() {
    const recipe = recipes.filter(recipe => {
        recipeHeadder.innerText = recipeTitle
        return recipe.title == recipeTitle;
    })[0]
    renderRecipe(recipe)
}

init()