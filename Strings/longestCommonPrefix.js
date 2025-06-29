/** 14
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix1 = function (strs) {
  let m = 0;

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][m];   
   
    for (let j = 1; j < strs.length; j++) {
        
      if (strs[j][m] !== char) {
        //break = when chars are not equal
        return strs[0].substring(0, m);
      }
      console.log("hi");
      
    }
    m++;
  }
  return strs[0]
};

//
var longestCommonPrefix = function (strs) {
 let x = 0;
 while (x < strs[0].length) {
    let char = strs[0][x];
    for(let i=1;i<strs.length;i++){
        if(strs[i][x] !== char || strs[i].length == x){
            //break
            return strs[0].substring(0,x)
        }
    }
    ++x;
 }
 return strs[0];
};

strs = ["flowers","fl"];
console.log(longestCommonPrefix1(strs));

