


/*

Write a function that reverses an array, You must reverse the input array in-place without using #reverse or #reverse!.

["h","a","k","n","a","H"]) >>>> ["h","a","n","n","a","H"]
var tmp = "n";
[i] [len-i]


*/


function reverse_arr(arr){
    let buffer = 0;
    let len = arr.length
    for (let i = 0 ; i < len / 2 ; i++){
        buffer = arr[i];
        arr[i] = arr[len-i-1]
        arr[len-i-1] = buffer
    }
    return arr
}


console.log(reverse_arr(["a","b","c","d"]) == ["d", "c","b","a"])
console.log(reverse_arr(["h","e","l","l","o"]) == ["o","l","l","e","h"])
console.log(reverse_arr(["H","a","n","n","a","h"]) == ["h","a","n","n","a","H"])
console.log(reverse_arr([1,2,3,4,5,6]) == [6,5,4,3,2,1])
console.log(reverse_arr(["a",1,"b",2]) == [2,"b",1,"a"])
