import express from 'express';
import read from './jsonFileStorage.js';

const app = express();

const getRecipe = (request, response) => {
  console.log('request for recipe came in');
  read('data.json', (err, data) => {
    if (request.params.index < data.recipes.length) {
      let recipeDetails = '';
    Object.entries(data.recipes[request.params.index]).forEach(([key, value]) => {
      recipeDetails += `${key}: ${value}<br>`;
    });
    const content = `
      <html>
        <body>
          <h1>RECIPE DETAILS</h1>
          <h3>${recipeDetails}</h3>
        </body>
      </html>
    `;
    // respond with data at index specified
    response.send(content);
  } else {
      response.status(404).send('Sorry, we cannot find that!');
    } 
  });
};

const getRecipeByYield = (request, response) => {
  console.log('request for recipe by yield');
  read('data.json', (err, data) => {
    let recipeDetails = '';
    const findYield = () => {
      data.recipes.forEach((element) => {
        if (request.params.amount === element.yield.toString()) {
          recipeDetails += `<p>Yield: ${element.yield.toString()}<br>
          Recipe Name: ${element.label}</p>`;
        }
      });
      return recipeDetails;
    };
    const content = `
    <html>
      <body>
        <h1>Recipes that yield ${request.params.amount} portions</h1>
        <p>${findYield()}</p>
      </body>
    </html>
    `;
    // respond with data
    response.send(content);
  });
};


app.get('/recipe/:index', getRecipe);
app.get('/yield/:amount', getRecipeByYield);

app.listen(3004);
