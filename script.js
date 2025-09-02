let currentInput = "";
let previousInput = "";
let operator = "";

function handleNumber(num) {
    if (num === "." && currentInput.includes(".")) return;

    currentInput += num;
    updateDisplay();
}

function handleOperator(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    const a = parseFloat(previousInput);
    const b = parseFloat(currentInput);
    let result;

    switch (operator) {

        case "+": result = a + b;
        break;
        case "-":
            result = a - b;
        break;
        case "*": result = a * b;
        break;
        case "/": result = b !== 0 ? a / b : "Error";
        break;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay();
}

function Clear() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}
function updateDisplay() {
    document.getElementById("display").value = currentInput || "0";
}























//
// let result= null
// let num1 ;
// let num2 = 0;
// let operator ;
//  function inputOp (op){
//      console.log("function  input op is called...")
//      operator = op.innerText;
//      if(num1===undefined){
//          num1=Number(document.getElementById("input").value);
//          document.getElementById("input").value=op.innerText;
//      }
//      //    if(result === null){
//   //       result=Number(document.getElementById("input").value);
//   //        document.getElementById("input").value='';
//   //       return;
//   //    }
//   //
//   //        num=Number(document.getElementById("input").value);
//   //    document.getElementById("input").value='';
//   //
//   //
//   //    document.getElementById("input").value=op.innerText;
//   //    operator=op.innerText;
//   // calculate();
//  }
// function calculate() {
//     console.log("function calculate is called...")
//
//
//
//     }
//       switch(operator){
//           case "+":
//               result+=num;
//               document.getElementById("input").value=result;
//               break;
//
//           case "-":
//               result-=num;
//               document.getElementById("input").value=result;
//               break;
//           case "*":
//               result*=num;
//               document.getElementById("input").value=result;
//               break;
//           case "/":
//               result/=num;
//               document.getElementById("input").value=result;
//               break;
//
//
//       }
//
//
//
//
// }
// function  pressEqual(){
//
//     num=Number(document.getElementById("input").value);
//      calculate();
//     document.getElementById("input").value=result;
//
// }
//  function press(val){
//     let inp= val.innerText;
//
//      document.getElementById("input").value+=inp;
//
//
//      if(num!==undefined){
//          calculate();
//      }
//
//
//
//
//
//  }
//
//  function Clear(){
//      let result= null
//      let num = 0;
//      document.getElementById("input").value="";
//
//  }