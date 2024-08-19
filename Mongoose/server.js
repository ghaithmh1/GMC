const mongoose = require('mongoose');
require('dotenv').config();

// Set strictQuery option to suppress deprecation warning
mongoose.set('strictQuery', false);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');
  
  // Define the Person schema
  const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
  });
  const Person = mongoose.model('Person', personSchema);

  const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

  const createPerson = async () => {
    const person = new Person({
      name: 'John Doe',
      age: 30,
      favoriteFoods: ['pizza', 'burritos']
    });

    try {
      const data = await person.save();
      console.log('Person saved:', data);
    } catch (err) {
      console.error('Error saving person:', err);
    }
  };

  const createManyPeople = async () => {
    const people = [
      { name: 'Alice', age: 25, favoriteFoods: ['sushi', 'burgers'] },
      { name: 'Bob', age: 40, favoriteFoods: ['pasta', 'salad'] },
      { name: 'Charlie', age: 35, favoriteFoods: ['burritos', 'tacos'] }
    ];

    try {
      const data = await Person.create(people);
      console.log('People created:', data);
    } catch (err) {
      console.error('Error creating people:', err);
    }
  };

  const findPeopleByName = async (name) => {
    try {
      const data = await Person.find({ name: name });
      console.log('People with name', name, ':', data);
    } catch (err) {
      console.error('Error finding people by name:', err);
    }
  };

  const findPersonByFood = async (food) => {
    try {
      const data = await Person.findOne({ favoriteFoods: food });
      console.log('Person with food', food, ':', data);
    } catch (err) {
      console.error('Error finding person by food:', err);
    }
  };

  const findPersonById = async (personId) => {
    if (!isValidObjectId(personId)) {
      console.error('Invalid ObjectId:', personId);
      return;
    }

    try {
      const data = await Person.findById(personId);
      console.log('Person with ID', personId, ':', data);
    } catch (err) {
      console.error('Error finding person by ID:', err);
    }
  };

  const updatePersonFavorites = async (personId) => {
    if (!isValidObjectId(personId)) {
      console.error('Invalid ObjectId:', personId);
      return;
    }

    try {
      const person = await Person.findById(personId);
      if (person) {
        person.favoriteFoods.push('hamburger');
        const updatedPerson = await person.save();
        console.log('Updated person:', updatedPerson);
      }
    } catch (err) {
      console.error('Error saving updated person:', err);
    }
  };

  const updatePersonAgeByName = async (personName) => {
    try {
      const updatedPerson = await Person.findOneAndUpdate(
        { name: personName },
        { age: 20 },
        { new: true }
      );
      console.log('Updated person by name:', updatedPerson);
    } catch (err) {
      console.error('Error updating person by name:', err);
    }
  };

  const deletePersonById = async (personId) => {
    if (!isValidObjectId(personId)) {
      console.error('Invalid ObjectId:', personId);
      return;
    }

    try {
      const deletedPerson = await Person.findByIdAndRemove(personId);
      console.log('Deleted person by ID:', deletedPerson);
    } catch (err) {
      console.error('Error deleting person by ID:', err);
    }
  };

  const deletePeopleByName = async (name) => {
    try {
      const result = await Person.deleteMany({ name: name });
      console.log('Result of delete operation:', result);
    } catch (err) {
      console.error('Error deleting people by name:', err);
    }
  };

  const findPeopleWhoLikeBurritos = async () => {
    try {
      const data = await Person.find({ favoriteFoods: 'burritos' })
        .sort({ name: 1 })
        .limit(2)
        .select('-age');
      console.log('People who like burritos:', data);
    } catch (err) {
      console.error('Error finding people who like burritos:', err);
    }
  };

  // Run the functions
  console.log("createPerson-----------------------------------------------------------------------------------------------------------");
  await createPerson();

  console.log("createManyPeople-------------------------------------------------------------------------------------------------------");
  await createManyPeople();

  console.log("findPeopleByName('Alice')-------------------------------------------------------------------------------------------------------");
  await findPeopleByName('Alice');

  console.log("findPersonByFood('burritos')--------------------------------------------------------------------------------------------");
  await findPersonByFood('burritos');

  console.log("findPersonById-----------------------------------------------------------------------------------------------------------");
  await findPersonById('66c297e69adb08044176ec92'); 

  console.log("updatePersonFavorites--------------------------------------------------------------------------------------------------------");
  await updatePersonFavorites('66c297e69adb08044176ec92');

  console.log("updatePersonAgeByName-------------------------------------------------------------------------------------------------------");
  await updatePersonAgeByName('Alice');

  console.log("deletePersonById-----------------------------------------------------------------------------------------------------------");
  await deletePersonById('66c2976b6ffe68ed0cfce937'); 

  console.log("deletePeopleByName------------------------------------------------------------------------------------------------------");
  await deletePeopleByName('Mary');

  console.log("findPeopleWhoLikeBurritos---------------------------------------------------------------------------------------------");
  await findPeopleWhoLikeBurritos();

  // Close the connection
  mongoose.connection.close();
});
