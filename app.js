

//Revision of js//

//setTimeout = it creates the timer for callback 
//function. once the timer completes it takes
//two parameters a callback function and timer
//as soon as the timer runs out it will execute the function.

let greet = new Promise((resolve, reject)=>{
      setTimeout(()=>{
       resolve("welcome")
      }, 5000)
})
console.log(greet)

//to get the value out of this greet//
// setTimeout(()=>{
//      console.log(greet)
// },6000)  
//instead of using the above setTimeout again
// will be using (.then) to resolve

// greet.then(value =>{
//     console.log(value)
//     return "welcome Again"

    
// }).then(newValue=>{
//     console.log(newValue)
// })


let response = fetch('https://jsonplaceholder.typicode.com/todos/10')

response.then(data =>{
    return (data.json())
}).then(content => {
    console.log(content)
})

