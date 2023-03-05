

//Reduce Object
// Reduce - Objects
// cart example
const cart = [
    {
        title: 'Samsung Galaxy S7',
        price: 599.99,
        amount: 1,
    },
    {
        title: 'google pixel ',
        price: 499.99,
        amount: 2,
    },
    {
        title: 'Xiaomi Redmi Note 2',
        price: 699.99,
        amount: 4,
    },
    {
        title: 'Xiaomi Redmi Note 5',
        price: 399.99,
        amount : 3,
    },
]


let {totalItem,cartTotal} = cart.reduce((total,cartItem)=>{

    const {price,amount} =  cartItem;
    total.totalItem += amount
    total.cartTotal += price*price
    return total
},{
    totalItem : 0,
    cartTotal : 0
})
cartTotal = parseFloat(cartTotal.toFixed(2))
console.log(totalItem,cartTotal)




const url = 'https://api.github.com/users/suraj9318/repos?per_page=100';

async function fetchRepo(){
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        let newData = data.reduce((total,dataItem)=>{
            
            const {language} = dataItem;

        //    if(language){
        //     if(total[language]){
        //         total[language] = total[language]+ 1
        //     }
        //     else{
        //         total[language] = 1
        //     }

        //    } 


           if(language){
            total[language] = total[language] + 1 || 1 
           }

            return total
        },{}
        )
        console.log(newData)

    } catch (error) {
        console.log(error)
    }

}


fetchRepo()
