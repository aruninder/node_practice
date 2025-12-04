const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,      // Type define karna zaruri hai
    required: true      // true yahan sahi hai
  },
worktype:{
type:String,
enum:['manager','chef','employee','waiter','other'],
default:'other'
},

  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  salary:{
    type:Number,
    required:true
  }
});

// create and export the model

const Person = mongoose.model('Person', personSchema);
module.exports = Person;
