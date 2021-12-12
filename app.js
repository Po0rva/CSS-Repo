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


let Name = new Promise((resolve,reject)=>{
 setTimeout(()=>{
      resolve('poorva')
     //reject('Hello')
 }, 3000)
})

Name.then(name=> {console.log(name)})
// console.log(Name)
// setTimeout(()=>{
//     console.log(Name)
// }, 4000)


// let response = fetch('https://jsonplaceholder.typicode.com/users')
// .then(data => {
//     console.log(data)
// })

//.then always returns promise//
//.then itself is a new promise//
// parseddata itself an promise//

//  let response = fetch('https://jsonplaceholder.typicode.com/users')
//  .then(res => res.json()).then(data => {
//      console.log(data)
//  })

 // .json => .json converts the stream of data into some readable objects or
 // its just a collection of packets
 // Heap => Heap is a data structure , use heap to store data.


 
// const list = document.querySelector('ul')

//  let arr = ['One','Two','Three','Four']

// console.log(list)
// arr.forEach(chore=>{
// const element = document.createElement('li')
// const textNode = document.createTextNode(chore)
// element.appendChild(textNode)

// element.addEventListener('click', (e) =>{
//     const useInput = window.prompt('Are you sure that you want to delete $(chore)')
//     if (useInput === 'yes') e.target.remove()
// })

// list.appendChild(element)
// })

const button = document.querySelector('button')
const input = document.querySelector('input')
const getData = async ()=> {
    const url = 'https://api.edaman.com/search?app_id=bd5145f&app_key=3b35932Be30cad3141319969dfedaba9&q=Pizza'

    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}

//add event listener to the button
button.addEventListener('click', () => {
     console.log(input.value)
})

