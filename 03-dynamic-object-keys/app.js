
// Dot notation
const person = {
    name : "jhon"
}
person.age =25

console.log(person)


// square bracket notation
// Example 1
const item = {
    'featured-items' : ['item1','item2']
}

console.log(item["featured-items"])
console.log(person['age'])

// Example 2
let appState = 'Loading';
const keyName = 'computer'

const app = {
[appState] : true
}
app[keyName] = 'apple'

console.log(app)

// Example 3

const state = {
    loading : true,
    name : '',
    position  : '',
}

function updateState(key,value){
    state[key] = value;
}

updateState('name','jhon');
updateState('loading',false);
updateState('product',[]);
console.log(state);