/** 860
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let map = new Map();

  for (let i = 0; i < bills.length; i++) {
    //store note in map
    if (map.get(bills[i])) {
      map.set(bills[i], map.get(bills[i]) + 1);
    } else {
      map.set(bills[i], 1);
    }

    //if bill is $5, no need to return any change

    //if bill is 10, check if we have $5 and reduce it's count else return false
    if (bills[i] == 10) {
      if (map.get(5) > 0) {
        map.set(5, map.get(5) - 1);
      } else return false;
    }
    //if bill is 20, check if we have $10 + $5 else $5+$5+$5 and reduce the count accordingly else false
    else if (bills[i] == 20) {
      if (map.get(10) > 0 && map.get(5) > 0) {
        map.set(10, map.get(10) - 1);
        map.set(5, map.get(5) - 1);
      } else if (map.get(5) > 2) {
        map.set(5, map.get(5) - 3);
      } else return false;
    }
  }
  return true;
};


var lemonadeChange = function (bills) {
  const map = new Map([
    [5, 0],
    [10, 0]
  ]);

  for (const bill of bills) {
    map.set(bill, (map.get(bill) || 0) + 1);

    if (bill === 10) {
      if (map.get(5) > 0) {
        map.set(5, map.get(5) - 1);
      } else {
        return false;
      }
    } else if (bill === 20) {
      if (map.get(10) > 0 && map.get(5) > 0) {
        map.set(10, map.get(10) - 1);
        map.set(5, map.get(5) - 1);
      } else if (map.get(5) >= 3) {
        map.set(5, map.get(5) - 3);
      } else {
        return false;
      }
    }
  }

  return true;
};

//without map
var lemonadeChange = function (bills) {
  let wallet = [0, 0]; //represents [$5,$10] => No need to maintain of $20 because we are not going to use $20 for change
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] == 5) ++wallet[0];
    else if (bills[i] == 10) {
      ++wallet[1];
      --wallet[0]; //$5 change was given to customer
    }
    //if it is $20
    else {
      //change can be one $10 + $5
      if (wallet[1]) {
        --wallet[1];
        --wallet[0];
      }
      //change can be three $5
      else {
        wallet[0] -= 3;
      }
    }

    if (wallet[0] < 0) return false;
  }
  return true;
};


//without array
var lemonadeChange = function (bills) {
  let five = 0, ten = 0;

  for (const bill of bills) {
    if (bill === 5) {
      five++;
    } 
    else if (bill === 10) {
      if (five === 0) return false;
      five--;
      ten++;
    } 
    else { // bill === 20
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};

bills = [5, 5, 20, 10, 20];
console.log(lemonadeChange(bills));
