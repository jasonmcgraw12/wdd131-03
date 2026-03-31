// const recipes = [
//     {
//         title: "snickerdoodle",
//         Description: "A classic snickerdoodle recipe with amazing mouth feel!",
//         img: "",

//         ingredients: {flour: "2 3/4 cups",
//                       creamOfTartar: "1 teaspoon",
//                       bakingSoda: "1/2 teaspoon",
//                       salt: "3/4 teaspoon",
//                       unsaltedButter: "1 cup",
//                       sugar: "1 1/2 cups",
//                       eggs: "2 large",
//                       vanilla: "2 teaspoons"
//         },
//         instructions: [
//             "Preheat oven to 350 degrees Fahrenheit.",
//             "Whisk flour, cream of tartar, baking soda, and salt in a medium mixing bowl.",
//             "In a larger bowl cream butter and sugar together.",
//             "Add eggs and vanilla to creamed mixture.",
//             "Combine flour and creamed mixtures together.",
//             "Roll dough in cinnamon and sugar.",
//             "Put cookies in the oven for 9-11 minutes."
//         ]
//     }
// ];
// WARNING I don't need the above object declaration, however, it's nice to have for the auto complete.
const main = document.querySelector("main");

const search = document.getElementById("search-bar");
const advancedButton = document.getElementById("advanced-button")
const blacklist = document.getElementById("blacklist");

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
    console.log(blacklist)
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
        console.log(blacklist.querySelectorAll("label"));
        blacklist.querySelectorAll("label").forEach(input => {
            const checkbox = input.firstElementChild;
            if (checkbox.checked){
                console.log("checkbox checked");
                blacklistWords.push(input.innerText.trim());
            }
            // if (checkbox is checked){
            //     add to blacklist array
            // }
        })
        console.log(blacklistWords);
        console.log(words);

        const filteredRecipies = recipes.filter(recipe => {
            const filterString = (recipe.title + " " + 
                                  recipe.description + " " + 
                                  recipe.ingredients.map(section => {return section.items.join(" ")}).join(" ") + " " +
                                  recipe.instructions).toLowerCase().replace(/[^\w\s]/g, "")
            console.log(`WhiteList = ${words}
                        blackList = ${blacklistWords}`)
            const doesIncludeWhitelist = words.every(word => {return filterString.includes(word.toLowerCase())})
            let doesIncludeBlacklist = false;
            if (blacklistWords.length == 0){
                doesIncludeBlacklist = false;
            }
            else{
                doesIncludeBlacklist = blacklistWords.some(word => {
                    console.log("Word check = ",word.toLowerCase())
                    return filterString.includes(word.toLowerCase())})
            }
            console.log(filterString)
            console.log(`Whitelist: ${doesIncludeWhitelist}
                         Blacklist: ${doesIncludeBlacklist}`)
            return (doesIncludeWhitelist && !doesIncludeBlacklist)
        })
        

        // const filteredRecipies = recipes.filter(recipe => {
        //     return (words.every(word => {return recipe.title.includes(word)})||
        //             words.every(word => {return recipe.description.includes(word)})||
        //             // words.every(word => {return recipe.ingredients.includes(word)})||
        //             words.every(word => {return recipe.instructions.includes(word)}))
        // });
        sortedRecipes = filteredRecipies.sort(compareTitle);

        main.innerHTML = falseSearchHTML;
        renderRecipes(sortedRecipes);
    }
}

function renderBlacklist(ingredients){
    if (ingredients.length % 2 != 0){
        blacklist.innerHTML = `<span class="short-title">Blacklist</span>`
    }
    else{
        blacklist.innerHTML = `<span class="long-title">Blacklist</span>`
    }
    ingredients.forEach(ingredient => {
        const newHTML = `
        <label for="">
            <input type="checkbox"> 
            ${ingredient}
        </label>`
        blacklist.innerHTML += newHTML // add html
    })
}

function init(){
    const sortedRecipes = recipes.sort(compareTitle);
    sortedRecipes.forEach(recipe => {console.log(recipe)});
    main.innerHTML = falseSearchHTML;
    renderRecipes(sortedRecipes);
    renderBlacklist(commonIngredients);
}

init();