let s = "kete";
let t = "etek";
var isAnagram = function (s, t) {
  if (s.length === t.length) {
    let sArray = s.split("");
    let tArray = t.split("");
    sArray.sort();
    tArray.sort();
    for (let i = 0; i < s.length; i++) {
      if (sArray[i] !== tArray[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
console.log(isAnagram(s, t));
