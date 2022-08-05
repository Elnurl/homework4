var isValid = function (s) {
  const stck = { "(": ")", "{": "}", "[": "]" };
  const stack = [];
  for (let i of s) {
    if (stck[i]) {
      stack.push(stck[i]);
    } else if (stack.length > 0 && stack[stack.length - 1] === i) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
