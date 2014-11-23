console.log('This would be the main JS file.');

function calculate() {
  var input_span = document.getElementById("shunting-input")
  var tokenized_span = document.getElementById("shunting-tokenized")
  var output_span = document.getElementById("shunting-result")
  var tokenized = tokenize_expression(input_span.value)
  tokenized_span.innerHTML = tokenized
  var postfixed = shunting_yard(tokenized)
  var result = calculate_rpn(postfixed)
  output_span.innerHTML = result
}

function tokenize_expression(expression_string) {
  var expression_string = expression_string.replace(/ /g, '')
  var expression_array = []
  var tokens = [
    /\d+/,
    /[\+\-\*\/\(\)]/
  ]
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
      return []
    }
  }
  return expression_array
}

function shunting_yard(infix_expression) {
  var postfix_expression = []
  var stack = []
  var precedence = {
  }
  precedence["+"] = 2
  precedence["-"] = 2
  precedence["*"] = 3
  precedence["/"] = 3
  precedence["^"] = 4
  for (i=0; i < infix_expression.length; i++) {
    token = infix_expression[i]
    number = parseInt(token)
    if (!isNaN(number)) {
      postfix_expression.push(number)
      continue
    }
    else if (token == '(') {
      stack.push(token)
    }
    else if (token == ')') {
      token = stack.pop()
      while (token != '(') {
        postfix_expression.push(token)
      }
    }
    else {
      while (stack.length > 0){
        check = stack.pop()
        if (check == '('){
          stack.push(check)
          break
        }
        else if (precedence[check] < precedence[token]) {
          stack.push(check)
          break
        }
        else {
          postfix_expression.push(check)
        }
      }
      stack.push(token)
    }
  }
  while (stack.length > 0) {
    postfix_expression.push(stack.pop())
  }
  return postfix_expression
}

function calculate_rpn(expression) {
  return expression
}
