function calculate() {
  var num1 = parseInt(document.getElementById("num1").value, 2);
  var num2 = parseInt(document.getElementById("num2").value, 2);
  var operation = document.querySelector(
    'input[name="operation"]:checked'
  ).value;
  var result = 0;
  if (operation === "add") {
    result = add(num1, num2);
  } else if (operation === "subtract") {
    result = subtract(num1, num2);
  }
  document.getElementById("result").innerHTML = "Result: " + result.toString(2);
}

function add(a, b) {
  var sum = a ^ b;
  var carry = (a & b) << 1;
  while (carry != 0) {
    var temp = sum ^ carry;
    carry = (sum & carry) << 1;
    sum = temp;
  }
  return sum;
}

function subtract(a, b) {
  var neg_b = add(~b, 1);
  return add(a, neg_b);
}
