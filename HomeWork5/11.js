function invertTree(root) {
  //   let start = 0;
  //   let end = n;
  let stack = [];
  //let a = root.sort();
  //   let rootnum = a.pop(a.slice(-1));
  // return rootnum;

  for (let i = 0; i <= root.length; i++) {
    console.log(root[i]);
    if (root[i] === root[1]) {
      stack.push(root[1]);
      return stack;
    }
    if (root[i] < root[1]) {
      stack.push(root[i + 1]);
      return stack;
    }
    if (root[i] > root[1]) {
      stack.push(root[i]);
      return stack;
    }
    //else {
    //   return false;
    // }
  }
}

/*while (start < end) {
    let a = Math.floor((start + end) / 2);
 }*/
//}
//let root = ;

console.log(invertTree([2, 2, 7, 1, 3, 6, 9]));
