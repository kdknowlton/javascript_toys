function update_color_picker() {
  swatch = document.getElementById('color-swatch')
  update_color(swatch, true)
}

function update_color(element, set_background) {
  if (typeof set_background === 'undefined') {
    set_background = true
  }
  red = document.getElementById("color-red")
  green = document.getElementById("color-green")
  blue = document.getElementById("color-blue")
  color = rgbToHex(red, green, blue)
  if (set_background) {
    element.style.backgroundColor = color
  }
  else {
    element.style.color = color
  }
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
