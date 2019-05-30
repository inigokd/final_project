const express = require ('express');
const bodyParser = require ('body-parser');
const cookieParser = require('cookie-parser')
const mongo = require('./mongo/mongo');

const app = express();
const PORT = 8800;
const url = `mongodb+srv://food_admin:20Grn1Fd@cluster0-irjod.mongodb.net/test?retryWrites=true`;
const mongoose = require ('mongoose');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.all('/', (req, res) => {
  res.status(403);
  res.json( {
    status: "Error"
  });
});

app.get("/products/", (req, res) => {
  mongo({act: 'find', collection: 'products'}, function(err, result){
    res.json(result);
  });
});
app.get("/products/:id", (req, res) => {
  mongo({act: 'find', collection: 'products', conditions: {
    "_id": req.params.id
  } }, function(err, result){
    if(!result || result.length === 0){
      res.status(403);
      res.json( {
        status: "Error"
      });
    }
    res.json(result[0]);
  });
});
app.listen( PORT, () => {
    console.log("http://localhost:" + PORT);
})