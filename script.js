//1.press button, display to the screen from  left to right
//2.press = show the total result
//3. press AC btton clear the screen
//4. C delete the last charactar/number/operator

const buttons = document.querySelectorAll("button");
// const display = document.querySelector("#result");
const displayElement = document.querySelector("#result");

let textToDisplay = " ";
const symbols = ["/", "*", "-", "+"];
console.log(textToDisplay);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    displayElement.style.background = "";
    displayElement.style.color = "";
    const val = btn.innerText;

    if (textToDisplay.length < 1 && symbols.includes(val)) return;

    if (
      symbols.includes(val) &&
      symbols.includes(textToDisplay[textToDisplay.length - 1])
    ) {
      textToDisplay = textToDisplay.slice(0, -1) + val;
      return display(textToDisplay);
    }
    //when = pressed or clicked
    if (val === "=") {
      if (!textToDisplay.length) return;

      if (symbols.includes(textToDisplay[textToDisplay.length - 1])) {
        textToDisplay = textToDisplay.slice(0, -1);
      }

      return onTotal();
    }

    if (val === "AC") {
      return resetDisplay();
    }
    if (val === "C") {
      textToDisplay = textToDisplay.slice(0, -1);
      return display(textToDisplay);
    }

    if (val === "." && textToDisplay.includes(".")) return;

    textToDisplay = textToDisplay + val;
    display(textToDisplay);
  });
});
//show the result

const display = (toDisplay) => {
  displayElement.innerText = toDisplay || "0.00";
};

//calculate the total value

const onTotal = () => {
  const randVal = randomNumber();

  if (randVal > 0) {
    displayElement.style.background = "red";
    displayElement.style.color = "white";

    displayElement.classList.add("prank");
    displayElement.addEventListener("animationend", () => {
      displayElement.classList.remove("prank");
    });
  }
  const total = eval(textToDisplay) + randVal;
  display(total);
  textToDisplay = " ";
};

//RESET THE DISPLAY AREA
const resetDisplay = () => {
  display("0.00");
  textToDisplay = "";
};

const randomNumber = () => {
  const val = Math.floor(Math.random() * 10);
  return val < 5 ? val : 0;
};
