const mongoose = require('mongoose');
const Schemas = require('./schemas');

const url = 'mongodb+srv://food_admin:20Grn1Fd@cluster0-irjod.mongodb.net/greenfood?retryWrites=true';
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log("mongodb connected...");


  // actions({
  //   act: 'find',
  //   collection: 'products',
  //   conditions: {
  //     name: 'Product1'
  //   },
  //   //fields: '_id',
  //   fields: null,
  //   options: {
  //     // skip: 1,
  //     // limit: 1
  //   }
  // }, function(err, data){
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     console.log(data);
  //   }
  // });

  // actions({
  //   act: 'add',
  //   collection: 'products',
  //   input: {
  //     "cat" : "Pasta",
  //     "name" : "Broccoli Pasta ",
  //     "img" : "url",
  //     "desc" : "Lorem Ipsum",
  //     "price" : 25
  //   }
  // }, function(err, data){
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     console.log("New Added");
  //   }
  // });





  // const Product = mongoose.model('Product', Schemas.products);

  // Product.find({}, '', function (err, product) {
  //   if (err) return handleError(err);
  //   // Prints "Space Ghost is a talk show host".
  //   console.log(product);
  // });

  // var addProduct = new Product({
  //   "cat": "Main Dish",
  //   "name": "Product1",
  //   "img": "",
  //   "desc": "",
  //   "price": 10
  // });
  // addProduct.save(function (err) {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log("saved")
  // });
});


function actions(obj, callback){
  // obj = { act, collection, conditions, fields, options, input }
  // act - find,add,edit,delete
  // input - only for add and edit
  const Model = mongoose.model('Model', Schemas[obj.collection]);

  if (obj === undefined || obj.act === undefined || obj.collection === undefined){
    callback('Error');
    return;
  }
  obj.conditions = obj.conditions === undefined ? {} : obj.conditions;
  obj.fields = obj.fields === undefined ? null : obj.fields;
  obj.options = obj.options === undefined ? {} : obj.options;
  obj.input = obj.input === undefined ? {} : obj.input;


  if(obj.act === 'find'){
    Model.find(obj.conditions, obj.fields, obj.options, function (err, items) {
      if (err) {
        callback(err);
        return;
      }
      callback(null, items);
    });
  }
  if(obj.act === 'add'){
    const newItem = new Model(obj.input);
    newItem.save(function (err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  }
}

module.exports = actions;