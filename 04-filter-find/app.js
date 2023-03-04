const people = [
    { name : "Bob", age : 20, position : "Developer"},
    { name : "Anna",  age : 25, position : "Desinger"},
    { name : "Sussy", age : 30, position : "The Boss"},
    { name : "Peter", age : 35, position : "Intern",}
]
const fruits = ["apple","banana","lemon"]
// filter 1
const youndPeople = people.filter((item)=> item.age <= 25)
console.log(youndPeople)

// filter 2
const developers = people.filter((item)=> item.position === "Developer")
console.log(developers)

// filter 3

const devAndIntern = people.filter((person)=>{
    return person.position === "Developer" || person.position === "Intern"
})
console.log(devAndIntern);



const peter = people.find((person)=> person.name === 'Peter')
console.log(peter)

const lemon = fruits.find((fruit)=>fruit === "lemon")
console.log(lemon)

// find 2 no match

const watermelon = fruits.find((item)=> item === "watermelon")
console.log(watermelon)

// find 3 multiple match

const randomPerson = people.find((item)=> item.age < 35);
console.log(randomPerson)
