import React, { useState } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operator, setOperator] = useState("");
  const [isOpe, setisOpe] = useState(false);
  const [ans, setAns] = useState(0);

  const handleButtonClick = (num: string) => {
    if (isOpe) {
      if (b.length === 0 && num === "0") {
        return;
      }
      let new_b = b + num;
      setB(new_b);
    } else if (!isOpe) {
      if (a.length === 0 && num === "0") {
        return;
      }
      let new_a = a + num;
      setA(new_a);
    }
  };

  const handleOpeButtonClick = (ope: string) => {
    if (a.length === 0) {
      return;
    }
    setOperator(ope);
    setisOpe(true);
  };

  const handleEqualButtonClick = () => {
    let a_num = Number(a);
    let b_num = Number(b);
    if (operator === "+") {
      setAns(a_num + b_num);
    } else if (operator === "-") {
      setAns(a_num - b_num);
    } else if (operator === "*") {
      setAns(a_num * b_num);
    } else if (operator === "/") {
      setAns(a_num / b_num);
    } else if (operator === "%") {
      setAns(a_num % b_num);
    }
  };

  const handleClearButtonClick = () => {
    setA("");
    setB("");
    setOperator("");
    setisOpe(false);
    setAns(0);
  };

  return (
    <div className="App">
      <div>
        <button
          type="button"
          onClick={() => {
            handleButtonClick("0");
          }}
        >
          0
        </button>
        <button
          type="button"
          onClick={() => {
            handleButtonClick("1");
          }}
        >
          1
        </button>
        <button
          type="button"
          onClick={() => {
            handleButtonClick("2");
          }}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => {
            handleButtonClick("3");
          }}
        >
          3
        </button>
        <button
          type="button"
          onClick={() => {
            handleButtonClick("4");
          }}
        >
          4
        </button>
        <button
          type="button"
          onClick={() => {
            handleButtonClick("5");
          }}
        >
          5
        </button>
        <button
          type="button"
          onClick={() => {
            handleButtonClick("6");
          }}
        >
          6
        </button>
        <button
          type="button"
          onClick={() => {
            handleButtonClick("7");
          }}
        >
          7
        </button>
        <button
          type="button"
          onClick={() => {
            handleButtonClick("8");
          }}
        >
          8
        </button>
        <button
          type="button"
          onClick={() => {
            handleButtonClick("9");
          }}
        >
          9
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleOpeButtonClick("+")}>
          +
        </button>
        <button type="button" onClick={() => handleOpeButtonClick("-")}>
          -
        </button>
        <button type="button" onClick={() => handleOpeButtonClick("*")}>
          *
        </button>
        <button type="button" onClick={() => handleOpeButtonClick("/")}>
          /
        </button>
        <button type="button" onClick={() => handleOpeButtonClick("%")}>
          %
        </button>
        <button type="button" onClick={() => handleEqualButtonClick()}>
          =
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleClearButtonClick()}>
          clear
        </button>
      </div>
      <div>
        <p>a : {a}</p>
        <p>ope : {operator}</p>
        <p>b : {b}</p>
        <p>ans : {ans}</p>
      </div>
    </div>
  );
}

export default App;
