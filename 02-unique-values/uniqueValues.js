const menu = [
    {
      name: 'pancakes',
      category: 'breakfast',
    },
    {
      name: 'burger',
      category: 'lunch',
    },
    {
      name: 'steak',
      category: 'dinner',
    },
    {
      name: 'bacon',
      category: 'breakfast',
    },
    {
      name: 'eggs',
      category: 'breakfast',
    },
    {
      name: 'pasta',
      category: 'dinner',
    },
  ];


//   const categories = menu.map((category)=>{
//     return category.category
//   })
//   let uniqueCategory =new Set(categories);
//   uniqueCategory = ['all',...uniqueCategory]

//   const btns = uniqueCategory.map((item)=>{
//     return `<button>${item}</button>`
//   })


// OR

const categories = ['all',...new Set(menu.map((item)=> `<button>${item.category}</button>`))]

  const result = document.querySelector('.result');
    result.innerHTML = categories.join('')

