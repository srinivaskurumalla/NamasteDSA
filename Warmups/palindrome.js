function isPalindrome(num) {
    let rev = 0;
    while (num > 0) {
        let rem = num%10;
        rev = (rev*10) + rem;
        num = Math.floor(num/10);
    }
    return rev;
}

let n = 1121;

let res = isPalindrome(n);
if(n === res){
    console.log(true);
    
}
else console.log(false);

