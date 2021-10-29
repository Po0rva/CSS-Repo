//operators//
//Arithmetic operators//

var a = 2
var b = 10

console.log('a + b =', a + b)
console.log('b - a =', b - a)
console.log('b / a =', b / a)
console.log('b * a =', b * a)
console.log('b ** a =', b ** a)
console.log('b % a =', b % a)

var c = 10

console.warn(c++)
console.log(c)

//Assignment operators//

b = 10
console.log('b',b)
b += 10
console.log('b+=1',b)
b++
console.log('b+=1',b)
b -= 10
console.log('b-=1',b)
b --
console.log('b--',b)

//comparision operators//

var d = 10
var e = 2
var f = '10'

console.log(d > e)
console.log(d < e)
console.log(d >= e)
console.log(d <= e)
console.log(d == e)

console.warn(d == f)
console.warn(d === f)

//logical operators//

console.log('true && true', true && true)
console.log('true && false', true && false)
console.log('false && true', false && true)
console.log('false && false', false && false)

console.log('true || true', true || true)
console.log('true || false', true || false)
console.log('false || true', false || true)
console.log('false || false', false || false)


