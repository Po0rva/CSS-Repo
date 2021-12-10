//promises//
//resolve = once if the promise is complete it will call the resolve function.
//reject = once if the promise is incomplete it will call the reject function.
//if the server return the promise completely it calls the resolve function.
//if the server fails to give the data then it calls the reject function.
// whenever the promise resolves it returns something.

//promise has 3 states//
// 1. fullfill state
// 2. pending state
// 3. rejected state
// 4. setteled state


// let value = new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//       resolve('Hello')
//      //reject('Hello')
//  }, 3000)
// })
// console.log(value)

// setTimeout(()=>
// {
//     console.log(value)
// }, 2000)

// let response = fetch('https://jsonplaceholder.typicode.com/users')
// .then(data => {
//     console.log(data)
// })

//.then always returns promise//
//.then itself is a new promise//
// parseddata itselfl an promise//

//  let response = fetch('https://jsonplaceholder.typicode.com/users')
//  .then(res => res.json()).then(data => {
//      console.log(data)
//  })

 // .json => .json converts the stream of data into some readable objects or
 // its just a collection of packets
 // Heap => Heap is a data structure , use heap to store data.
 
const list = document.querySelector('ul')

 let arr = ['One','Two','Three','Four']

console.log(list)
arr.forEach(chore=>{
const element = document.createElement('li')
const textNode = document.createTextNode(chore)
element.appendChild(textNode)

element.addEventListener('click', (e) =>{
    const useInput = window.prompt('Are you sure that you want to delete $(chore)')
    if (useInput === 'yes') e.target.remove()
})

list.appendChild(element)
})