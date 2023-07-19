import React, { useState } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operator, setOperator] = useState("");
  const [isOpe, setisOpe] = useState(false);

  const handleButtonClick = (num: string) => {
    if (isOpe) {
      if (b.length === 0 && num == "0") {
        return;
      }
      setB(num);
    } else if (!isOpe) {
      if (a.length === 0 && num == "0") {
        return;
      }
      setA(num);
    }
  };

  const handleOpeButtonClick = (ope: string) => {
    if (a.length === 0) {
      return;
    }
    setOperator(ope);
    setisOpe(true);
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
      </div>
      <div>
        <p>{a}</p>
        <p>{operator}</p>
        <p>{b}</p>
      </div>
    </div>
  );
}

export default App;
