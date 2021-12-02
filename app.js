//Promises==> promise is just an object whose value is 
//uncertain at the moment but in future it might return the value
//or not but actually its just an acknowledgement.

//javascript under the HOOD//
// while (true) {
//     console.log('HI')
// }                      this resulting in memory overflow
//javascript is a single threaded operation//

//core javascript have 2 parts 
//Heap ==> manages the memory manages the garbage collections. it implements heap data structure to manage all the data.
//Call stack ==> whatever we execute that is in call stack.

console.log("one");
console.log("two");
setTimeout(() => {
    console.log('timer');
}, 5000)
console.log("three");
console.log("four"); 

setTimeout(() => {console.log('Timer') }, 0)

for (var i=0; i<5000; i++) {
    console.log(i)
}


