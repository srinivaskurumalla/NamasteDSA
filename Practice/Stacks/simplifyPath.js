/** 71
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  path = path.split("/");
  let stack = [];
  let canonicalPath = "";

  for (let str of path) {
    if (str == "" || str == ".") continue; //Ignore "." and empty
    if (str == "..") {
      //If ".." mean prev or parent => if stack is not empty remove parent
      if (stack.length) {
        stack.pop();
      }
    } else stack.push(str);
  }

  console.log(stack);

  //return "/" + stack.join("/");    //In other languages this is not allowed.
  //so..
  while(stack.length){
    let currPath = stack.pop()
    canonicalPath = "/" + currPath + canonicalPath;
  }
    return canonicalPath.length? canonicalPath : "/";
};

console.log(simplifyPath("/a/./b/../../c/"));
