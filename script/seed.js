const axios = require("axios");
const { prisma } = require("../src/generated/prisma-client");

// const queryArray = "abcdefghijklmnopqrstuvwxyz0123456789'".split('')
const queryArray = "789'".split("");

queryArray.forEach(async element => {
  try {
    let { data } = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${element}`
    );
    if (data.drinks) {
      data.drinks.forEach(async drink => {
        let cocktailObject = {
          name: drink.strDrink,
          alcoholic: drink.strAlcoholic === "Alcoholic",
          imageUrl: drink.strDrinkThumb,
          starterPack: false,
        };
        let cocktailRow = await prisma.createCocktail(cocktailObject);
        //create new cocktail in db and save object

        let ingredients = [];
        let ingredientMeasures = [];
        for (i = 1; i < 16; i++) {
          if (drink[`strIngredient${i}`]) {
            ingredients.push(drink[`strIngredient${i}`]);
            ingredientMeasures.push(drink[`strMeasure${i}`]);
          }
        }

        ingredients.forEach(async (ingredient, index) => {
          //TODO insert new CocktailIngredient
          //create or find ingredient in ingredient tand save id
          let ingredientRow = await prisma.ingredient({
            name: ingredient,
          });

          //handle null measure values
          if (!ingredientMeasures[index]) {
            ingredientMeasures[index] = "";
          }

          //create new row in  CocktailIngredient table
          await prisma.createCocktailIngredient({
            measure: ingredientMeasures[index],
            cocktail: { connect: { id: cocktailRow.id } },
            ingredient: { connect: { id: ingredientRow.id } },
          });
        });
      });
    }
  } catch (error) {
    console.error("error");
  }
});
