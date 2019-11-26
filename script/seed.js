const axios = require('axios')
var fs = require('fs')
var Mutation = require('../src/resolvers/Mutation')
const { prisma } = require("../src/generated/prisma-client");

const queryArray = "abcdefghijklmnopqrstuvwxyz123456789'".split('')
console.log(queryArray)

createCocktailQuery = `


`

let sum = 0
let cocktailArray = []

// var file = fs.createWriteStream('highjackedCocktails.txt')
// file.on('error', function(err){console.error(err)})

queryArray.forEach(async (element) => {
  console.log('element', element)
  let {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${element}`)
  if(data.drinks){
    data.drinks.forEach(async (drink) => {
      let cocktailObject = {
        name: drink.strDrink,
        alcoholic: drink.strAlcoholic === 'Alcoholic',
        imageUrl: drink.strDrinkThumb,
        starterPack: false,
      }
      let cocktailRow = await prisma.createCocktail(cocktailObject)
      //create new cocktail in db and save object
      for(i = 0; i < 16; i++){
        let ingredientName = drink[`strIngredient${i}`]
        let ingredientMeasure = drink[`strMeasure${i}`]

        console.log('ingredientName: , ', ingredientName)
        console.log('ingredientMeasure: , ', ingredientMeasure)
        if(ingredientName){
          //create or find ingredient in ingredient table and save id
          let ingredientRow = await prisma.ingredient({
            name: ingredientName
          })
          console.log('ingredientRow: ', ingredientRow)
          if(!ingredientRow){
            ingredientRow = await prisma.createIngredient({
              name: ingredientName
            })
          }
          //create new row in cocktailingredient table
          await prisma.createCocktailIngredient({
            measure: ingredientMeasure,
            cocktail: {connect: {id: cocktailRow.id}},
            ingredient: {connect: {id: ingredientRow.id}}
          })

        }
      }
      console.log('prisma: ', prisma)
    })
  }
})






// async function seed(){
// for (i =32; i < 127; i++){
//   console.log(String.fromCharCode(i))
//   let {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${String.fromCharCode(i)}`)
//     if(data.drinks){
//       sum += data.drinks.length
//   }
// }
// console.log(sum)
// }

// seed()



