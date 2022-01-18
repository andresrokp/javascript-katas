// send the first element of the array to the last place
function rotate(arr) {
    return [...arr].slice(1,arr.length).concat(arr[0])
}

// divide the array in two and rotate the last part
function rotate_tail(arr,n){
    return [...arr].slice(0,-n).concat(rotate([...arr].slice(-n,arr.length)))
}