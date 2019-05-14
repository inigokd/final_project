const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');

const app = express();
const PORT = 8800;


app.set("view engine", "ejs");
app.set("views", "./view");
app.use(express.static("static"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use('/api', blogRouter);


app.get("/", (req, res) => {
    res.render("index",);
  });

app.listen( PORT, () => {
    console.log("http://localhost/" + PORT);
})