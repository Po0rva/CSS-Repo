const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
// const a = document.getElementsByTagName('input')[0]
// const b = document.getElementsByTagName('input')[1]
 const add = document.querySelector('#add')
 const multiply = document.querySelector('#multiply')
  const resultBox = document.querySelector('.result')
const sum = () => 
{
    const result= parseInt(a.value) + parseInt(b.value)
    console.log(result)
    resultBox.innerHTML = result
}

const product = () => 
{
    const result= parseInt(a.value) *  parseInt(b.value)
    console.log(result)
    resultBox.innerHTML = result
}


 const calculate = (event,operation) =>{
//     console.log(event.target)
//     if (operation == 'add')
//     {
//         console.log('adding')
//     }else if (operation => 'multiply')
//     {
//         console.log('multiply')
//     }
// }
//  add.addEventListener('click', calculate('add'))
//  multiply.addEventListener('click', calculate('multiply'))

switch (operation) {
    case "add":
        resultBox.innerHTML = parseInt(a.value) + parseInt
        (b.value)
        break;
    case "multiply":
        resultBox.innerHTML = parseInt(a.value) * parseInt
        (b.value)
        break;
    default:
        resultBox.innerHTML = "not a valid operation"
    }

}

 add.addEventListener('click', (event) =>
 {
     calculate(event, 'add')
 })
 multiply.addEventListener('click', (event) =>
 {
    calculate(event, 'multiply')
 })



