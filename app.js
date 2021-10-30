
//variable
//condition(i<arr.length)
//iterator(i++)

var list = document.querySelector('ul')
console.log(list)

var arr = ['go to th gym','cook oatmeal','Eat']

arr.push('complete the assignment')

for (var i = 0; i < arr.length; i++)
{
    var element = document.createElement('li')
    var textNode = document.createTextNode(arr[i])
    console.log(arr[i])
    element.appendChild(textNode)
    list.appendChild(element)
}
