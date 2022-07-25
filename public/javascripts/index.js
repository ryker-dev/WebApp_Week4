//const port = process.env.PORT || '3000';

async function fetchRecipe (recipeName) {
    const response = await fetch("http://localhost:3000/recipe/pizza");
    const data = await response.json();
    return data;
}

async function fetchImage(breedName) {
    const response = await fetch(
      "https://dog.ceo/api/breed/" + breedName + "/images/random"
    );
    const data = await response.json();
    return data.message;
  }

fetchRecipe("pizza").then((res) => {
    console.log(res.name);
    const recipeName = document.createElement("p");
    recipeName.innerText = res.name;
    const recipeIngredients = document.createElement("p");
    recipeIngredients.innerText = res.ingredients;
    const recipeInstructions = document.createElement("p");
    recipeInstructions.innerText = res.instructions;

    const container = document.getElementById("recipe-container");
    container.appendChild(recipeName);
    container.appendChild(recipeIngredients);
    container.appendChild(recipeInstructions);

});