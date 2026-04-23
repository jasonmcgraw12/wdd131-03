// document.addEventListener("click", e => {
//     console.log("Clicked:", e.target, "ID:", `"${e.target.id}"`);
// }); // CHANGE delete this, it's just for testing

const main = document.querySelector("main");

const search = document.getElementById("search-bar");
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
        const addHTML = `
            <div class="card">
                <a href="recipe.html?page=${recipe.title}" class="recipe-link">
                    <div class="preview-div">
                        <h2>${recipe.title}</h2>
                        <img class="recipe-preview" src="${recipe.img}" alt=${recipe.imgalt}>
                        <p class="image-description">${recipe.description}</p>
                    </div>
                    <hr>
                    <div class="info-div">
                        <p class="info-title">Quick Info</p>
                        <p>Yummyness: 5/5</p>
                        <p>Weird ingredient(s): cream of tartar</p>
                        <p>Time (active/passive): 1hr/10min</p>
                        <p>Difficulty: ☠️☠️⬛️⬛️⬛️</p>
                    </div>
                </a>
            </div>
            `;
        main.innerHTML += addHTML;
        })
    }
    
    
}

search.addEventListener("keydown", event => {filterRecipes(event)})
advancedButton.addEventListener("click", event => {
    event.preventDefault()
    // console.log(blacklist)
    if (blacklist.classList.contains("hide")){
        blacklist.classList.remove("hide")
    }
    else{
        blacklist.classList.add("hide")
    }
})

function filterRecipes(event){
    if (event.key === "Enter"){
        event.preventDefault();
        const words = search.value.split(" ");
        const blacklistWords = [];
        // console.log(blacklist.querySelectorAll("label"));
        blacklist.querySelectorAll("label").forEach(input => {
            const checkbox = input.firstElementChild;
            if (checkbox.checked){
                // console.log("checkbox checked");
                blacklistWords.push(input.innerText.trim());
            }
            // if (checkbox is checked){
            //     add to blacklist array
            // }
        })
        // console.log(blacklistWords);
        // console.log(words);

        const filteredRecipies = recipes.filter(recipe => {
            const filterString = (recipe.title + " " + 
                                  recipe.description + " " + 
                                  recipe.ingredients.map(section => {return section.items.join(" ")}).join(" ") + " " +
                                  recipe.instructions).toLowerCase().replace(/[^\w\s]/g, "")
            // console.log(`WhiteList = ${words}
                        // blackList = ${blacklistWords}`)
            const doesIncludeWhitelist = words.every(word => {return filterString.includes(word.toLowerCase())})
            let doesIncludeBlacklist = false;
            if (blacklistWords.length == 0){
                doesIncludeBlacklist = false;
            }
            else{
                doesIncludeBlacklist = blacklistWords.some(word => {
                    // console.log("Word check = ",word.toLowerCase())
                    return filterString.includes(word.toLowerCase())})
            }
            // console.log(filterString)
            // console.log(`Whitelist: ${doesIncludeWhitelist}
                        //  Blacklist: ${doesIncludeBlacklist}`)
            return (doesIncludeWhitelist && !doesIncludeBlacklist)
        })
        
        sortedRecipes = filteredRecipies.sort(compareTitle);

        main.innerHTML = falseSearchHTML;
        renderRecipes(sortedRecipes);
    }
}


// CHANGE the checkboxes when including or excluding should have an x or check, and change the color (of check boxes) to match
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
            console.log(item.parentElement)
            if(item.checked){
                item.parentElement.classList.add("exclude-checked")
                console.log("checked")
            }
            else{
                item.parentElement.classList.remove("exclude-checked")
                console.log("unchecked")
            }
            }
    )})
}

function init(){
    const sortedRecipes = recipes.sort(compareTitle);
    // sortedRecipes.forEach(recipe => {console.log(recipe)});
    main.innerHTML = falseSearchHTML;
    renderRecipes(sortedRecipes);
    renderBlacklist(commonIngredients);
}

init();