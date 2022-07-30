function parenthesisChecker(expr) {
  let stack = [];

  for (let i = 0; i < expr.length; i++) {
    let a = expr[i];
    if (a == "(" || a == "[" || a == "{") {
      stack.push(a);
      continue;
    }

    if (stack.length == 0) return false;

    if (
      (a === ")" && stack.pop() != "(") ||
      (a === "}" && stack.pop() != "{") ||
      (a === "]" && stack.pop() != "[")
    ) {
      return false;
    }
  }
  return stack.length == 0;
}

let expr = "([{()}])";

if (parenthesisChecker(expr)) {
  console.log("Balanced ");
} else {
  console.log("Not Balanced ");
}
