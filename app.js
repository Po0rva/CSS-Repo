// let a = 20
// var b = 40
// console.log(a, b)


// if (true){
//     var Name = 'Ferrari'
// }
// console.log(Name)


// const print = ()=>{
//     var Name = "mercedes"
//     if (true){
//         console.log(Name)
//     }
//     return Name
// }
// print()



//console.log(this.alert('hi'))
//console.log(this)   refers to self window or else the parent object.


// let car = {
//     name: "C class",
//     manufacturer: "mercedes",
//     print:function (a){
//         console.log(a)
//     }
// }
// car.print("Ferrari")
// console.log(car.name)
// console.log(car.manufacturer)


// let car = {
//     name: "C class",
//     manufacturer: "mercedes",
//     print:function (a){
//         console.log(`${this.name} was created by ${this.manufacturer}`) 
//     }
// }

// car.print()


// setTimeout(() => {
// console.log("Bhavani")
// }, 0)
// console.log("HI")

var data = fetch('https://kea.kar.nic.in/')
console.log(data)
