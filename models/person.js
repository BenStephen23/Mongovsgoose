const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Person schema
const personSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
});

// Creating a model
const Person = mongoose.Schema('Person', personSchema);

module.exports = Person;
