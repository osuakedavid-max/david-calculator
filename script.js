  const display = document.querySelector(".display");

  const buttons=document.querySelectorAll("button");
  let firstNumber = null;
  let currentOperator = null;
  let justCalculated = false;
  buttons.forEach(button => {
  button.addEventListener("click",
  () => {
    if (button.textContent === "C") {
    display.textContent ="0";
    firstNumber = null;
    currentOperator = null;
    justCalculated = false;
    return;
    }
  if (button.textContent ==="=") {
    if (currentOperator === null)
    {
      return;
    }
    const secondNumber = 
  Number(display.textContent);
    let result;
  if(currentOperator ==="+"){
    result = firstNumber + secondNumber;
  } else if(currentOperator ==="-"){
    result = firstNumber - secondNumber;
  } else if(currentOperator ==="*"){
    result = firstNumber * secondNumber;
  } else if(currentOperator ==="/"){
       if(secondNumber === 0){
       display.content = "You no get sense?";
         return;
       } 
    result = firstNumber / secondNumber;
  }
    display.textContent = result;
    justCalculated = true;
    firstNumber = null;
    currentOperator = null;
    return;
  }
  if(["+","-","*","/"].includes(button.textContent))
  {
     firstNumber =
  Number(display.textContent);
        currentOperator =
    button.textContent;
       display.textContent = "0";
      justCalculated = false;
    return;
  }
  if (justCalculated) {
    display.textContent =
      button.textContent;
    justCalculated = false;
    return;
  }
  if (display.textContent ==="0") {
      display.textContent = 
        button.textContent;
      } else {
          display.textContent +=
      button.textContent;
     }
   });
});