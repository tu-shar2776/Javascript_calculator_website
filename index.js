let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
function ex() {
  screenValue += Math.E;
  screen.value = screenValue;
}
function pow() {
  var a = prompt("Enter base: ");
  var b = prompt("Enter power: ");
  var c = Math.pow(a, b);
  screenValue += c;
  screen.value = screenValue;
}
function bmi() {
  var a = prompt("Enter weight(in kg): ");
  var b = prompt("Enter height(in cm): ");
  b = b / 100;
  var c = a / (b * b);
  c = c.toFixed(2);
  screenValue += c;
  screen.value = screenValue;
  if (c >= 25.0) {
    alert(c + " Take a rest from food :(");
  } else if (18.5 <= c <= 24.9) {
    alert(c + " Well Done!! keep it up :)");
  } else {
    alert(c + " Get in touch with food :(");
  }
}
function gcd(a, b) {
  if (a == 0) {
    return b;
  }
  return gcd(b % a, a);
}
function lcm() {
  var a = prompt("Enter first no: ");
  var b = prompt("Enter second no: ");
  screenValue += (a / gcd(a, b)) * b;
  screen.value = screenValue;
}
function hcf() {
  var a = prompt("Enter first no: ");
  var b = prompt("Enter second no: ");

  screenValue += gcd(a, b);
  screen.value = screenValue;
}
function fact() {
  let number = screen.value;
  number = eval(number);
  if (number < 0) {
    alert("Please enter a positive number");
    screenValue = "";
    screen.value = screenValue;
  } else if (number === 0) {
    screen.value = 1;
  } else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
      fact *= i;
    }
    screenValue = fact;
    screen.value = screenValue;
  }
}
function pi() {
  screenValue += Math.PI;
  screen.value = screenValue;
}
function log() {
  let n = screen.value;
  n = eval(n);
  if (n > 0) {
    screenValue = Math.log(n).toFixed(3);
    screen.value = screenValue;
  } else {
    alert("Logarithm is not defined for number less than or equal to 0");
    screenValue = "";
    screen.value = screenValue;
  }
}
function squareRoot() {
  // const number = parseInt(screen.value);
  let number = screen.value;
  number = eval(number);
  if (number < 0) {
    alert("Please enter a positive number");
    screenValue = "";
    screen.value = screenValue;
  }
  screenValue = Math.sqrt(number).toFixed(3);
  screen.value = screenValue;
}
function square() {
  let n = screen.value;
  n = eval(n);
  screenValue = n * n;
  screen.value = screenValue;
}
function dec2bin() {
  if (screenValue == "") {
    alert("Please enter a number");
  } else {
    // const number = parseInt(screen.value);
    let number = screen.value;
    number = eval(number);
    const result = number.toString(2);
    screenValue = result;
    screen.value = screenValue;
  }
}
function bin2Dec() {
  let a = 0;
  let num = screen.value;
  let dec = 0;
  for (let i = 0; i < num.length; i++) {
    if (screenValue[i] == "1" || screenValue[i] == "0") {
      a++;
    } else {
      a = 0;
    }
  }

  if (a == num.length) {
    for (let i = 0; i < num.length; i++) {
      if (num[num.length - (i + 1)] === "1") {
        dec += 2 ** i;
      }
    }
    screenValue = dec;
    screen.value = screenValue;
  } else {
    alert("Enter a valid binary number");
    screenValue = "";
    screen.value = screenValue;
  }
}
function Sine() {
  let n = screen.value;
  n = eval(n);
  var rad = (n * Math.PI) / 180;
  screenValue = Math.sin(rad).toFixed(3);
  screen.value = screenValue;
}
function Cosine() {
  let n = screen.value;
  n = eval(n);
  var rad = (n * Math.PI) / 180;
  screenValue = Math.cos(rad).toFixed(3);
  screen.value = screenValue;
}
function Tan() {
  let n = screen.value;
  n = eval(n);
  if (n == 90) {
    alert("tan(90) is not defined");
    screenValue = "";
    screen.value = screenValue;
  } else {
    var rad = (n * Math.PI) / 180;
    screenValue = Math.tan(rad).toFixed(3);
    screen.value = screenValue;
  }
}
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    console.log("lenght of screen ", screenValue.length + 1);

    if (buttonText == "×") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "÷") {
      buttonText = "/";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "←") {
      var newStr = screenValue.slice(0, -1);
      screenValue = newStr;
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      screenValue = screen.value;
    } else if (
      buttonText != "sin" &&
      buttonText != "cos" &&
      buttonText != "tan" &&
      buttonText != "B2D" &&
      buttonText != "D2B" &&
      buttonText != "x2" &&
      buttonText != "√" &&
      buttonText != "ln" &&
      buttonText != "n!" &&
      buttonText != "π" &&
      buttonText != "Hcf" &&
      buttonText != "Lcm" &&
      buttonText != "Bmi" &&
      buttonText != "Pow" &&
      buttonText != "e"
    ) {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
