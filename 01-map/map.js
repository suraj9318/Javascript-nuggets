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

// Return ages
const ages = people.map(function(person){
    return person.age
})
console.log(ages)

// Return array of objects of new people
const newPeople = people.map((item)=>{
    return {firstName : item.name.toUpperCase(),
        oldAge : item.age +20
    }
})
console.log(newPeople);

// return and show names of persons
const names = people.map((person,key)=>{
    return `<h1>${key+1} ${person.name}</h1>`
} )
const  result= document.querySelector('#result');
result.innerHTML = names.join('');