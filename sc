<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<input type="text" id="scob"><br>
<span id="result"></span>
<script>
document.getElementById('scob').oninput = function() {
  var str = this.value;
  var resultSpan = document.getElementById('result');
  if (brac(str)) {
    resultSpan.innerHTML = 'Ok';
    resultSpan.style.color = 'green';
  } else {
    resultSpan.innerHTML = 'Error';
    resultSpan.style.color = 'red';
  }
}
 
function brac(str) {
  var count = 0;
  for (var i = 0; i <= str.length; i++) {
    if (str[i] == "(") {
      count++;
    } else if (str[i] == ")") {
      count--;
    }
  }
  if (count == 0) {
    return true;

  } else {

    return false;

  }
  }
</script>
</body>
</html>
