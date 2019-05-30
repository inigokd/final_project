const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Schemas = {
  products: new Schema({
    "cat": String,
    "name": String,
    "img": String,
    "desc": String,
    "price": Number
  }, {
      collection: 'products'
    }),
  offers: new Schema({
    "cat": String,
    "name": String,
    "img": String,
    "desc": String,
    "price": Number,
    "newPrice": Number
  }, {
    collection: 'offers'
  }),
  carts: new Schema({
    "name": String,
    "quantity": Number,
    "price": Number,
  }, {
    collection: 'carts'
  })
};

module.exports = Schemas;