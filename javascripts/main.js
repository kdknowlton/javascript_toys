console.log('This would be the main JS file.');

function calculate() {
  var input_span = document.getElementById("shunting-input")
  var tokenized_span = document.getElementById("shunting-tokenized")
  var output_span = document.getElementById("shunting-result")
  tokenized = tokenize_expression(input.value)
  tokenized_span.innerHTML = tokenized
  postfixed = shunting_yard(tokenized)
  result = calculate_rpn(postfixed)
  output.innerHTML = result
}

function tokenize_expression(expression_string) {
  var expression_string = expression_string.replace(/ /g, '')
  var expression_array = new Array()
  var tokens = new Array(
    /\d+/,
    /[\+\-\*\/\(\)]/
  )
  var regex
  var found
  while (expression_string.length > 0) {
    found = false
    for (i=0; i < tokens.length; i++) {
      regex = tokens[i]
      if (expression_string.search(regex) == 0) {
        expression_array[expression_array.length] = regex.exec(expression_string)
        expression_string = expression_string.replace(regex, '')
        found = true
      }
    }
    if (!found) {
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
