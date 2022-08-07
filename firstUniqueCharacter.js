



// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

const first_uniq_char = (str)=>{
    for(let i = 0; i < str.length; i++)
        if (str.indexOf(str[i]) === i && str.indexOf(str[i],i+1) === -1)
            return i
    return -1;
}


console.log(first_uniq_char("") === -1)
console.log(first_uniq_char("aabccde") === 2)
console.log(first_uniq_char("rainbow") === 0)
console.log(first_uniq_char("eeaatt") === -1)
console.log(first_uniq_char("lovelettuce") === 1)
console.log(first_uniq_char("aabb") === -1)
