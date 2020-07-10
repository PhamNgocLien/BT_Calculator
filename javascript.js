function add() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let add = number1 + number2;
    document.getElementById("result").innerHTML = "Result Division: " + add;
}
function sub() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let sub = number1 - number2;
    document.getElementById("result").innerHTML = "Result Division: " + sub;
}
function mul() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let mul = number1 * number2;
    document.getElementById("result").innerHTML = "Result Division: " + mul;
}
function div() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let div = number1 / number2;
    document.getElementById("result").innerHTML = "Result Division: " + div;
}