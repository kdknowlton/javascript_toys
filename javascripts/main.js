console.log('This would be the main JS file.');

function calculate() {
  var input = document.getElementById("equation-in")
  var output = document.getElementById("equation-out")
  tokenized = tokenize_expression(input.value)
  postfixed = shunting_yard(tokenized)
  result = calculate_rpn(postfixed)
  output.innerHTML = result
}

function tokenize_expression(expression_string) {
  var expression_string = expression_string.replace(/ /g, '')
  var expression_array = new Array()
  while (expression_string.length > 0) {
    if (expression_string.search(/\d+/) == 0) {
      expression_array[expression_array.length] = /d+/.exec(expression_string)
      expression_string = expression_string.replace(/d+/, '')
    }
    else if (expression_string.search(/[\+\-\*\/]/) == 0) {
      expression_array[expression_array.length] = /[\+\-\*\/]/.exec(expression_string)
      expression_string = expression_string.replace(/[\+\-\*\/]/, '')
    }
    else {
      return new Array()
    }
  }
  return expression_array
}

function shunting_yard(infix_expression) {
  postfix_expression = infix_expression
  return postfix_expression
}

function calculate_rpn(expression) {
  return expression
}
