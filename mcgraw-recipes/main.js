
const main = document.querySelector("main");

const search = document.getElementById("search-bar");
const magensearch = document.getElementById("search-submit")
const advancedButton = document.getElementById("advanced-button")
const blacklist = document.getElementById("blacklist");


let blacklistItems = []

const falseSearchHTML = `<h2>No recipe was found that matched your search.</h2>`;

function compareTitle(a, b){
    if (a.title < b.title){
        return -1;
    }
    else if (a.title > b.title){
        return 1;
    }
    else{
        return 0;
    }
}

function renderRecipes(recipeList){
    if (recipeList.length == 0){
        main.innerHTML = falseSearchHTML;
    }
    else {
        main.innerHTML = ``;
        recipeList.forEach(recipe => {
            const recipeIngredients = []
            recipe.sections.forEach(section => {
                section.ingredients.forEach(ingredient => {recipeIngredients.push(ingredient.split(":")[0])})
            })
            let weirdIngredients = recipeIngredients.filter(ingredient => {
                return !commonIngredients.includes(ingredient)
            }).join(", ")
            let pluralIngredient = ""
            if (weirdIngredients == ""){
                weirdIngredients = "None"
            }
            if (weirdIngredients.split(",").length >= 2) {
                pluralIngredient = "s"
            }
            // WARNING some recipies don't have weird ingredients, so make something for that. and "Weird ingredient(s)" looks unprofessional
            const addHTML = `
                <div class="card">
                    <a href="recipe.html?page=${recipe.title}" class="recipe-link">
                        <div class="preview-div">
                            <h2>${recipe.title}</h2>
                            <img class="recipe-preview" src="${recipe.img}" alt=${recipe.imgalt}>
                        </div>
                        <div class="info-div">
                            <p class="info-title">Quick Info</p>
                            <p class="info-tag"><span class="category">Yummyness:</span> ${recipe.yummyness}</p>
                            <p class="info-tag"><span class="category">Difficulty:</span> ${recipe.difficulty}</p>
                            <p class="info-tag"><span class="category">Odd ingredient${pluralIngredient}:</span> ${weirdIngredients}</p>
                            <p class="info-tag"><span class="category">Time:</span> ${recipe.time}</p>
                        </div>
                        <div class="description-div">
                            <p class="info-title">Description</p>
                            <p class="description">${recipe.description}</p>
                        </div>
                    </a>
                </div>
                `;
            main.innerHTML += addHTML;
        })
    }
    
    
}

search.addEventListener("keydown", event => {
    if (event.key === "Enter"){
        filterRecipes(event)
    }
})
magensearch.addEventListener("click", event => {
    filterRecipes(event)
})
advancedButton.addEventListener("click", event => {
    event.preventDefault()
    if (blacklist.classList.contains("hide")){
        blacklist.classList.remove("hide")
    }
    else{
        blacklist.classList.add("hide")
    }
})

function filterRecipes(event){
    console.log(event.key)
    event.preventDefault();
    const words = search.value.split(" ");
    const blacklistWords = [];
    blacklist.querySelectorAll("label").forEach(input => {
        const checkbox = input.firstElementChild;
        if (checkbox.checked){
            blacklistWords.push(input.innerText.trim());
        }
    })

    const filteredRecipies = recipes.filter(recipe => {
        const filterString = (recipe.title + " " + 
                                recipe.description + " " + 
                                recipe.sections.map(section => {return section.ingredients.join(" ")}).join(" ") + " " +
                                recipe.instructions).toLowerCase().replace(/[^\w\s]/g, "")
        const doesIncludeWhitelist = words.every(word => {return filterString.includes(word.toLowerCase())})
        let doesIncludeBlacklist = false;
        if (blacklistWords.length == 0){
            doesIncludeBlacklist = false;
        }
        else{
            doesIncludeBlacklist = blacklistWords.some(word => {
                return filterString.includes(word.toLowerCase())})
        }
        return (doesIncludeWhitelist && !doesIncludeBlacklist)
    })
    
    sortedRecipes = filteredRecipies.sort(compareTitle);

    main.innerHTML = falseSearchHTML;
    renderRecipes(sortedRecipes);
}


// CHANGE make footer appear at bottom (probably)
// CHANGE give search bar a submit button, instead of having to select search and hit enter (maybe just for the advanced section)
function renderBlacklist(ingredients){
    if (ingredients.length % 2 != 0){
        blacklist.innerHTML = `<span class="short-title">Include recipies with...</span>`
    }
    else{
        blacklist.innerHTML = `<span class="long-title">Include recipies with...</span>`
    }
    ingredients.forEach(ingredient => {
        const newHTML = `
        <label for="">
            <input type="checkbox"> 
            ${ingredient}
        </label>`
        blacklist.innerHTML += newHTML // add html
    })
    // adding checked functionality to each blacklist checkbox
    blacklistItems = document.querySelectorAll("#blacklist label input[type='checkbox']")
    blacklistItems.forEach(item => {item.addEventListener(
        "change", event => {
            if(item.checked){
                item.parentElement.classList.add("exclude-checked")
            }
            else{
                item.parentElement.classList.remove("exclude-checked")
            }
            }
    )})
}

function init(){
    const sortedRecipes = recipes.sort(compareTitle);
    main.innerHTML = falseSearchHTML;
    renderRecipes(sortedRecipes);
    renderBlacklist(commonIngredients);
}

init();