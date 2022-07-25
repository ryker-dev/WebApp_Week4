//const port = process.env.PORT || '3000';
const ingredientList = [];
const instructionList = [];
const port = 1234;

async function fetchRecipe (recipeName) {
    const response = await fetch(`http://localhost:${port}/recipe/pizza`);
    return response.json();
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

const btnIngredient = document.getElementById("add-ingredient");
const textIngredient = document.getElementById("ingredients-text")
const btnInstruction = document.getElementById("add-instruction");
const textInstruction = document.getElementById("instructions-text")
const nameText = document.getElementById("name-text");

btnIngredient.addEventListener("click", function() {
    const text = textIngredient.value;
    ingredientList.push(text);
    console.log(ingredientList);
});

btnInstruction.addEventListener("click", function() {
    const text = textInstruction.value;
    instructionList.push(text);
    console.log(instructionList);
});

const btnSubmit  = document.getElementById('submit');
btnSubmit.addEventListener('click', function() {
    console.log("Posting");
    fetch(`http://localhost:${port}/recipe/`, {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: `{ "name": "${nameText.value}", "ingredients": ${JSON.stringify(ingredientList)}, "instructions": ${JSON.stringify(instructionList)} }`
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }).catch(
        console.log("Error")
    );
    
    const form = document.getElementById("image-form");
    const images = document.getElementById("image-input");
    const formdata = new FormData();
    formdata.append("images", images);

    const request = new XMLHttpRequest();
    request.open("POST", `http://localhost:${port}/images/`);
    request.send(formdata);
});