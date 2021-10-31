
// shortcut for comment lines ctrl+k+c
// for uncomment ctrl+k+u


var arr = ['go to the gym','eat food','clean house']

//for(var i=0; i< arr.length; i++)
//{
  //  console.log(arr[i])
//}

// const greet = age => 'hello ' + age

// console.log(greet('poorva'))
//var callbackFunction = () =>
var callbackFunction = (element)=>
{
    //console.log('I ran')
    console.log(element)
}
// arr.forEach(element, index)=>
// {
//     console.log(element, index)
// }


var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

const callbackFunction = () =>
{
    console.log('sdf')
}
button.addEventListener('click', callbackfunc)