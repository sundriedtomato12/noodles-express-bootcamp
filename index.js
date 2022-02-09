import express from 'express';
import read from './jsonFileStorage.js';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.render('noodlerecipehomepage');
  });

  app.get('/carrotonionnoodles.html', (request, response) => {
    response.render('carrotonionnoodles');
  });

  app.get('/chickennoodlespage.html', (request, response) => {
    response.render('chickennoodlespage');
  });

  app.get('/onionnoodlespage.html', (request, response) => {
    response.render('onionnoodlespage');
  });

  app.get('/oniontomatopasta.html', (request, response) => {
    response.render('oniontomatopasta');
  });

  app.get('/shreddedchickennoodles.html', (request, response) => {
    response.render('shreddedchickennoodles');
  });

  app.get('/stirfriedchickennoodles.html', (request, response) => {
    response.render('stirfriedchickennoodles');
  });

  const getRecipeByCategory = (request, response) => {
  console.log('request for recipe by category');
  if(request.params.category === 'vegan') {
      response.render('veganrecipes')
    }
};

app.get('/category/:category', getRecipeByCategory);

app.listen(3004);
