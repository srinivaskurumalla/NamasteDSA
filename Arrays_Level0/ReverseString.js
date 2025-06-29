// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.
var reverseString = function(s) {
   let l = s.length;
   let hl = Math.floor(l/2);
    for (let i = 0; i <hl; i++) {
        //swap
        let a = s[i];
        s[i] = s[l-1-i];
        s[l-1-i] = a;
        
    }
    return s;
};

s = ["h","e","l","l","o"];
let result = reverseString(s);
console.log(result);
