const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operations = ["%", "*", "/", "-", "+", "="];

let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
    display.value = output;
  } else if (btnValue === "AC") {
    output = "";
    display.value = "0";
  } else if (btnValue === "DEL") {
    output = output.slice(0, -1);
    display.value = output;
  } else if (
    !isNaN(btnValue) ||
    btnValue === "." ||
    operations.includes(btnValue)
  ) {
    output += btnValue;
    display.value = output;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (event) => calculate(event.target.value));
});
