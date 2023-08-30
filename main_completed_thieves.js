// additional control flow concept, switch statements
/* Syntax: 
switch(expression) {
    case a:
        code block
        break;
    case b:
        code block
        break;
    default:
        // code block
} 
*/

let num = 0 
switch(num) {
  case 0:
    console.log('i am case 0')
    break
  case 1:
    console.log('i am case 1')
    break
  case 2:
    console.log('i am case 2')
    break
  default:
    console.log('default')
}

// JS Objects (Python Dicts)
let person = {
  name: 'Dylan',
  age: 99,
  location: 'USA'
};

// access data in objects (using bracket or dot notation)
console.log(person.age)
console.log(person['age']);

// Inclass Exercise #1 (Get the Value 'Manchester United')
const person2 = {
  name: "Max",
  age: 31,
  prog_languages: ["JavaScript", "Python", "C++", "Java"],
  fav_color: "Blue",
  teams: [
    {
      baseball: "Chicago White Sox",
      football: "Chicago Bears",
      hockey: "Chicago Blackhawks",
      basketball: ["Chicago Bulls", "Chicago Sky"],
      soccer: ["Chicago Fire", "Naperville Yellowjacks"],
    },
    {
      baseball: "Toronto Bluejays",
      football: "LA Rams",
      basketball: "Milwalkee Bucks",
      soccer: ["Manchester United", "Liverpool"],
    },
  ],
};

// Solution Here:
console.log(person2.teams[1].soccer[0])

// JS Object methods ((Object.keys(object), Object.values(object))
console.log(Object.keys(person));
console.log(Object.values(person))

// looping an object using for in
// for in: iterates over keys in object or indices in an array

// keys
for(let k in person){
  console.log(k)
}
// values1
for(let k in person){
  console.log(person[k])
}
for(let v of Object.values(person)){
  console.log(v)
}

// ---------- Creating a JS Class ----------
class Team {
  constructor(city, name){
    this.city = city
    this.name = name
  }

  printInfo = () => `The ${this.name} are from ${this.city}.`
}

// Creating an instance
const seahawks = new Team('Seattle', 'Seahawks')
console.log(seahawks.printInfo())

// Inheriting from a class using 'extends'
class Player extends Team {
  constructor(city, name, playerName){
    super(city, name)
    this.playerName = playerName
  }

  printInfo2 = () => {
    return `${this.playerName} plays for the ${this.city} ${this.name}`
  }
}

const kevinD = new Player('Pheonix', 'Suns', 'Kevin Durant')
console.log(kevinD.printInfo2())

// ---------- JS Closures ----------
function a(){
  let grandpa = 'grandpa'
  return  function b(){
    let father = 'father'
    return function c(){
      let son = 'son'
      return `${grandpa} => ${father} => ${son}`
    }
  }
}

console.log(a()()())

// ---------- JS Promises ----------
/*
A promise is something that will take time to do.
There are two possible outcomes of a promise
-- Resolve/Fulfilled = Success
-- Reject = Error
*/
// response = requests.get(url)
// data = response.json()
// console.log(data)
// returns a pending promise


// 2 ways to handle promises
// first way using callbacks: .then(resolved) / .catch(reject)
console.log(fetch("https://pokeapi.co/api/v2/pokemon/ditto"))
.then((response) => {
  console.log(response.json())
})
.then(() => {
  console.log(data)
})
.catch((error) => {
  console.log('There was a problem accessing the api', error)
})
// handle pending promise with .then(), .catch()

// viewing our data if promise resolved: 200 status code

// Second way: Using async/await (ES6)
const pokemonData = async () => {
  try{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await response.json()
    console.log(data)
  }
  catch {
    console.log('there was an error')
  }
}

pokemonData()
