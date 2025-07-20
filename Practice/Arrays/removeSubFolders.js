/** 1233
 * @param {string[]} folder
 * @return {string[]}
 */

//using built in starts with
var removeSubfolders = function (folder) {
    folder = folder.sort();
    let ans = [folder[0]];
    let j = 0;
    for (let i = 1; i < folder.length; i++) {
        if (folder[i].startsWith(ans[j] + "/")) {
            continue;
        } else {
            ans.push(folder[i]);
            j++;
        }
    }

    return ans;
};
//with my own StartsWith
var removeSubfolders = function (folder) {
  folder = folder.sort();
  console.log(folder);

  let ans = [folder[0]];
  let j = 0;
  for (let i = 1; i < folder.length; i++) {
    let arr1Length = ans[j].length;
    let isSubFolder = isItStartsWith(ans[j], folder[i].slice(0,arr1Length + 1));
    if (isSubFolder) {
      continue;
    } else {
      ans.push(folder[i]);
      j++;
    }
  }

  return ans;
};

var isItStartsWith = function (arr1, arr2) {
  console.log("arr1",arr1);
  console.log("arr2",arr2);
  
  return arr1 + "/" === arr2;
};
folder = ["/ah/al/am", "/ah/al"];
console.log(removeSubfolders(folder));
