
function EqualButton() {
  let ans = document.getElementById('output-value').innerText;
  let fans = eval(ans);
  document.getElementById('evaluation-value').innerText = "";
  document.getElementById('output-value').innerText = fans;
}

function Equal() {
  let ans = document.getElementById('output-value').innerText;
  let fans = eval(ans);
  document.getElementById('evaluation-value').innerText = fans;
}

function AddValue(value) {
  document.getElementById('output-value').innerText += value;
  Equal();
}

function clearText() {
  document.getElementById('output-value').innerText = "";
  document.getElementById('evaluation-value').innerText = "";
}

function backSpace() {
  document.getElementById('output-value').innerText =   document.getElementById('output-value').innerText.substring(
    0,  document.getElementById('output-value').innerText.length-1);
    
  // document.getElementById('evaluation-value').innerText =   document.getElementById('output-value').innerText.substring(
  //   0,  document.getElementById('evaluation-value').innerText.length-1)
}
