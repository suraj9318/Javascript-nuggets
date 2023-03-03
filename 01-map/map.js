const people = [
    {
        name : "Bob",
        age : 20,
        position : "Developer"
    },
    {
        name : "Anna",
        age : 25,
        position : "Desinger",
    },
    {
        name : "Sussy",
        age : 30,
        position : "The Boss",
    }
]


const ages = people.map(function(person){
    return person.age
})
console.log(ages)


const newPeople = people.map((item)=>{
    return {firstName : item.name.toUpperCase(),
        oldAge : item.age +20
    }
})
console.log(newPeople);
let count = 0
const names = people.map((person,key)=>{
    return `<h1>${key+1} ${person.name}</h1>`
} )
const  result= document.querySelector('#result');
result.innerHTML = names.join('');