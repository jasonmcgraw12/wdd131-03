const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const recipeTitle = urlParams.get('page'); 
const ingredientSections = document.getElementById("ingredients")
const recipeImage = document.getElementById("image-div")
const instructions = document.querySelector("#instructions ol")


console.log(recipeTitle);

function renderRecipe(recipe) {
    // render image
    let newHTML = `<img src=${recipe.img} alt=${recipe.imgalt}>`
    recipeImage.innerHTML = newHTML
    // render ingredients
    newHTML = ``
    recipe.ingredients.forEach(section => {
        const sectionName = `<h3>${section.section}</h3>`
        let ingredientNames = ``
        section.items.forEach(ingredient => {
            ingredientNames += `<label class="ingredient">
                <input type="checkbox">
                <span class="ingredient-text">${ingredient}</span>
            </label>`
        })
        newHTML += `<div class="section">${sectionName}
        ${ingredientNames}</div>`
    })
    console.log("Ingredient html is...\n",newHTML)
    ingredientSections.innerHTML = newHTML
    // render instructions
    newHTML = ``
    recipe.instructions.forEach(instruction => {
        newHTML += `<li>${instruction}</li>`
    })
    instructions.innerHTML = newHTML;
}

function init() {
    const recipe = recipes.filter(recipe => {
        console.log("does it equal ",recipe.title)
        return recipe.title == recipeTitle;
    })[0]
    console.log(recipe)
    renderRecipe(recipe)
}

init()