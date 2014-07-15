var prompt = require('sync-prompt').prompt;

var dogs = [];
var cats = [];
var bees = [];
var people = [];

var person1 = {name: 'bob', age: 10, pets: []};
var person2 = {name: 'sam', age: 5 , pets: []};
var person3 = {name: 'jill', age: 2, pets: []};

people.push(person1, person2, person3);

var option = prompt('(d)og, (c)at, (b)ees or (q)uit? ');
while(option !=='q'){
  switch(option){
    case 'd':
      var dog = {name:name, age:age, gender:gender};
      var name = prompt('Name: ');
      var age = prompt('Age: ');
      var gender = prompt('Gender: ');
      dogs.push(dog);
    case 'c':
      var cat = {color:color, breed:breed, food:food};
      var name = prompt('Name: ');
      var color = prompt('Color: ');
      var breed = prompt('Breed: ');
      var food = prompt('What kind of food: ');
      cats.push(cat);
    case 'b':
      var bee = {species:species, queen:queen, sting:sting};
      var name = prompt('Name: ');
      var species = prompt('What species of bee? ');
      var queen = prompt('Is it a queen bee? ');
      var sting = prompt('Did you get stung? ');
      bees.push(bee);
      break;
}
    option = prompt('(d)og, (c)at, (b)ees or (q)uit? ');

}
option = prompt('(b)ob, (s)am, (j)ill, or (q)uit: ');
while(option !== 'q'){
  for (var i = 0; i < people.length; i++){
    if(people[i].name[0] === option){
    var client = people[i];
    break;
  }
  }  
  var animals;
  console.log('Client: ', client);
  var choice = prompt('What type of pet? (d)og, (c)at, (b)ee, or (q)uit: ');
  switch(choice){
    case 'd': 
      console.log('Dogs: ', dogs);
      animals = dogs;
      break;
    case 'c':
      console.log('Cats: ', cats);
      animals = cats;
      break;
    case 'b':
      console.log('Bees: ', bees);
      animals = bees;
}

  name = prompt('What is the name of the animal you want to adopt? ');
  
  for ( var i = 0; i < animals.length; i++){
  var animal = animals[i];
  var index = i;
  break;
  }

  console.log('Animal: ', animal);
  animals.splice(index, count, 1);
  client.pets.push(animal);
  console.log('After adoption: ', client);
  console.log('Animals array: ', animals);
  option = prompt('(b)ob, (s)am, (j)ill, or (q)uit: ');
}
console.log(dogs);
console.log(cats);
console.log(bees);

