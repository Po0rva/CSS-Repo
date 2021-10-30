var heading = document.getElementById('heading')
heading.innerHTML = "hi from js"
heading.style = "color:red; font-size:20px;"

heading.classList.add('five')
heading.classList.remove('one')

console.log(heading.classList)

 
var heading = document.getElementById('heading')
 var para = document.getElementsByClassName('para')
 var tags = document.getElementsByTagName('a')
 var query = document.querySelector('.para')
 //var query = document.querySelector('#heading')
 var query = document.querySelectorAll('.para')
 
 console.log(query)


 console.log(para.length)
 console.log(para[0])
 console.log(para[1])
 console.log(heading)

 