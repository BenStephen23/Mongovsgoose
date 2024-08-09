const mongoose = require('mongoose');
require('dotenv').config();
const Person = require('./models/person');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


    // Create a new person
    const newPerson = new Person({
        name: 'Stephen Ben',
        age: 20,
        favoriteFoods: ['Eba', 'Beans', 'Rice']
    });
    
    // Save the new person to the database
    newPerson.save((err, data) => {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Saved person:', data);
        }
    });
    