commonIngredientList = document.getElementById("common-ingredient-list");

commonIngredients.forEach(ingredient => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    commonIngredientList.appendChild(listItem);
})