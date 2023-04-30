var radix = function() {
  var n = document.getElementById('n').value;
  var from = document.getElementById('from').value;
  var to = document.getElementById('to').value;
  document.getElementsByTagName('span').item(0).innerText = n;
  document.getElementsByTagName('sub').item(0).innerText = from;
  document.getElementsByTagName('span').item(1).innerText = parseInt(n, from).toString(to).toUpperCase();
  document.getElementsByTagName('sub').item(1).innerText = to;
};
