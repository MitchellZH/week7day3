//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [
    {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt",
    },
  ],
};

const displayPerson = (person) => {
  let restaurants = [];
  for (let k in person.shakes[0]) {
    restaurants.push(k);
  }
  console.log(
    `this person's favorite pizza is: ${person.pizza[0]} and ${person.pizza[1]}`
  );
  console.log(`this person's favorite tacos are: ${person.tacos}`);
  console.log(`this person's favorite burgers are: ${person.burgers}`);
  console.log(
    `this person's favorite ice cream is: ${person.ice_cream[0]}, ${person.ice_cream[1]} and ${person.ice_cream[2]}`
  );
  console.log(`This person's favorite shakes are as followed:
  ${person3.shakes[0].oberwise} from ${restaurants[0]}
  ${person3.shakes[0].dunkin} from ${restaurants[1]}
  ${person3.shakes[0].culvers} from ${restaurants[2]}
  ${person3.shakes[0].mcDonalds} from ${restaurants[3]}
  ${person3.shakes[0].cupids_candies} from ${restaurants[4]}`);
};

console.log(displayPerson(person3));

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printInfo = () => `${this.name} is ${this.age} years old.`;

  incrementAge = () => this.age++;
}

const mitchell = new Person('Mitchell', 27);
const aperson = new Person('Personson', 50);
console.log(mitchell.printInfo());
mitchell.incrementAge();
mitchell.incrementAge();
mitchell.incrementAge();
console.log(mitchell.printInfo());
console.log(aperson.printInfo())




// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

const f1Data = async () => {
  try {
    const response = await fetch("http://ergast.com/api/f1/2008/5/driverStandings.json");
    const data = await response.json();
    console.log(data);
  } catch {
    console.log("there was an error");
  }
};

f1Data();



// ============= Codewars #1 ============//
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!
function paperwork(n, m) {
  if (n >= 0 && m >= 0) {
    return n * m;
  } else {
    return 0;
  }
}

console.log(paperwork(5, 5));

// ============= Codewars #2 ============//
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]
const distinct = (seq) => {
    let newSeq = []
    let counter = 0
    for( num of seq){
        if (!newSeq.includes(num)){
          newSeq.push(num)
        }   
    }
    return newSeq
}

console.log(distinct([1, 2, 1, 1, 3, 2]));