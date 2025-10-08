/** 91
 * @param {string} s
 * @return {number}
 */

//Naive Recursion => 2^n time
var numDecodings = function (s) {
  let fn = (remS) => {
    //remaining String

    //base cases
    if (remS === "") return 1;
    if (remS === "0") return 0; //can't make a path

    let n = remS.length;
    let oneDigit = remS.substring(n - 1);
    let twoDigit = remS.substring(n - 2);

    let ans = 0;

    //check if one digit is valid
    if (oneDigit != "0") {
      ans += fn(remS.substring(0, n - 1));
    }

    //check if two digit is valid
    if (twoDigit >= 10 && twoDigit <= 26) {
      ans += fn(remS.substring(0, n - 2));
    }

    return ans;
  };
  return fn(s);
};

//Adding DP
var numDecodings = function (s) {
  let dp = {};

  let fn = (remS) => {
    //remaining String

    //base cases
    if (remS === "") return 1;
    if (remS === "0") return 0; //can't make a path

    //if(dp[remS]) return dp[remS]; //thrown TLE Again
    if(remS in dp) return dp[remS]; //Faster way of checking

    let n = remS.length;
    let oneDigit = remS.substring(n - 1);
    let twoDigit = remS.substring(n - 2);

    let ans = 0;

    //check if one digit is valid
    if (oneDigit != "0") {
      ans += fn(remS.substring(0, n - 1));
    }

    //check if two digit is valid
    if (twoDigit >= 10 && twoDigit <= 26) {
      ans += fn(remS.substring(0, n - 2));
    }

    dp[remS] = ans;
    return ans;
  };
 return fn(s);
};
