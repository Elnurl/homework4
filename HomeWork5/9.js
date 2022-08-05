function backspaceCompare(S, T) {
  let sArr = [];
  let tArr = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "#") {
      sArr.pop();
    } else {
      sArr.push(S[i]);
    }
  }
  for (let i = 0; i < T.length; i++) {
    if (T[i] === "#") {
      tArr.pop();
    } else {
      tArr.push(T[i]);
    }
  }
  sArr = sArr.join("");
  tArr = tArr.join("");
  return sArr === tArr;
}
