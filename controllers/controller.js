const Person = require ('.models/person');

// To add a new person to the database, Create Many Records with Model.create()
const createPerson = () => {
    const person = new Person({
        name: 'John Doe',
        age: 30,
        favoriteFoods: ['Pizza', 'Burger']
    });

    person.save((err, data) => {
        if (err) return console.error(err);
        console.log('Person saved:', data);
    });
};

module.exports = createPerson();

// To find all the people in the database, use Model.find()

const findPeopleByName = (name) => {
    Person.find({ name }, (err, people) => {
        if (err) return console.error(err);
        console.log('People found:', people);
    });
};

module.exports = findPeopleByName();

// to find the people by id
const findPersonById = (personId) => {
    Person.findById(personId, (err, person) => {
        if (err) return console.error(err);
        console.log('Person found:', person);
    });
};

module.exports = findPersonById();

// To update the person, use Model.findOneAndUpdate()

const updatePersonFavoriteFoods = (personId) => {
    Person.findById(personId, (err, person) => {
        if (err) return console.error(err);
        person.favoriteFoods.push('Hamburger');
        person.save((err, updatedPerson) => {
            if (err) return console.error(err);
            console.log('Updated person:', updatedPerson);
        });
    });
};

module.exports = updatePersonFavoriteFoods();

// . Use Model.findOneAndUpdate() for New Updates

const updatePersonAge = (personName) => {
    Person.findOneAndUpdate(
        { name: personName },
        { age: 20 },
        { new: true },
        (err, updatedPerson) => {
            if (err) return console.error(err);
            console.log('Updated person:', updatedPerson);
        }
    );
};

module.exports = updatePersonAge();

// Delete Person

const deletePersonById = (personId) => {
    Person.findByIdAndRemove(personId, (err, deletedPerson) => {
        if (err) return console.error(err);
        console.log('Deleted person:', deletedPerson);
    });
};

module.exports = deletePersonById();

// Delete Many People

const deletePeopleByName = () => {
    Person.remove({ name: 'Mary' }, (err, result) => {
        if (err) return console.error(err);
        console.log('People removed:', result);
    });
};

module.exports = deletePeopleByName();


// Chaining queries; Find people who like burritos, sort by name, limit results, and hide age:

const findPeopleWhoLikeBurritos = () => {
    Person.find({ favoriteFoods: 'Burritos' })
        .sort({ name: 1 })
        .limit(2)
        .select('-age')
        .exec((err, people) => {
            if (err) return console.error(err);
            console.log('People who like burritos:', people);
        });
};

module.exports = findPeopleWhoLikeBurritos();





