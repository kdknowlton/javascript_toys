console.log('This would be the main JS file.');

function calculate() {
  var input = document.getElementById("equation-in")
  var output = document.getElementByID("equation-out")
  output.innerHTML = input.value
}
