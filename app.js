var arr = [1, 2, 3, 4, 5, 6, 7, 8] 

//arr.push(6) //it adds element ending of an array.
//arr.unshift(6)  //it adds element starting of an array.

//arr.shift()  //it removes the 1st element of an array.

//var new_arr = arr.slice(4, 8)

//br

// var new_arr=[]

// for(var i=0; i< arr.length; i++){
//     if (arr[i] % 2 ==0) new_arr.push(arr[i])
// }

//br//

var new_arr = arr.filter((element, index) => {
    //console.log(element, index)
    if(element < 100) return true
})

console.log(new_arr)
