const axios = require("axios");
const { prisma } = require("../src/generated/prisma-client");

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

        let ingredients = [];
        for (i = 1; i < 16; i++) {
          if (drink[`strIngredient${i}`]) {
            ingredients.push(drink[`strIngredient${i}`]);
          }
        }

        ingredients.forEach(async ingredient => {
          ingredientExists = await prisma.$exists.ingredient({
            name: ingredient,
          });

          if (!ingredientExists)
            ingredientRow = await prisma.createIngredient({
              name: ingredient,
            });
        });
      });
    }
  } catch (error) {
    console.error("error");
  }
});
