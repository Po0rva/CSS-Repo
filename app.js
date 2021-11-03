var body = document.querySelector('body')
var button = document.querySelector('button')

const callbackfunc = (Event) => 
{
    //body.classList.add('dark')
    body.classList.toggle('dark')
}

button.addEventListener('click', callbackfunc)