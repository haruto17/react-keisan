import React, { useState } from "react";
import { Button, KIND } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

type CalcResult = {
  a: string;
  ope: string;
  b: string;
  ans: number;
};

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operator, setOperator] = useState("");
  const [isOpe, setisOpe] = useState(false);
  const [ans, setAns] = useState(0);
  const [results, setResults] = useState<CalcResult[]>([]);

  const handleButtonClick = (num: string) => {
    if (isOpe) {
      if (b === "0") {
        if (num === ".") {
          let new_b = b + num;
          setB(new_b);
        } else {
          let new_b = num;
          setB(new_b);
        }
      } else {
        let new_b = b + num;
        setB(new_b);
      }
    } else if (!isOpe) {
      if (a === "0") {
        if (num === ".") {
          let new_a = a + num;
          setA(new_a);
        } else {
          let new_a = num;
          setA(new_a);
        }
      } else {
        let new_a = a + num;
        setA(new_a);
      }
    }
  };

  const handleOpeButtonClick = (ope: string) => {
    if (a.length === 0) {
      return;
    }
    setOperator(ope);
    setisOpe(true);
  };

  const handleCommaClick = () => {
    if (isOpe) {
      if (b.length === 0) {
        return;
      }
      let new_b = b + ".";
      setB(new_b);
    } else if (!isOpe) {
      if (a.length === 0) {
        return;
      }
      let new_a = a + ".";
      setA(new_a);
    }
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

  const handleMemButtonClick = () => {
    setResults([...results, { a: a, ope: operator, b: b, ans: ans }]);
  };

  const handleSetMem = (index: number) => {
    setA(results[index].a);
    setB(results[index].b);
    setOperator(results[index].ope);
    setAns(results[index].ans);
  };

  return (
    <div className="App">
      <FlexGrid flexGridColumnCount={1} flexGridRowGap="scale400">
        <FlexGridItem>
          <ButtonGroup>
            <Button onClick={() => handleButtonClick("7")}>7</Button>
            <Button onClick={() => handleButtonClick("8")}>8</Button>
            <Button onClick={() => handleButtonClick("9")}>9</Button>
          </ButtonGroup>
        </FlexGridItem>
        <FlexGridItem>
          <ButtonGroup>
            <Button onClick={() => handleButtonClick("4")}>4</Button>
            <Button onClick={() => handleButtonClick("5")}>5</Button>
            <Button onClick={() => handleButtonClick("6")}>6</Button>
          </ButtonGroup>
        </FlexGridItem>
        <FlexGridItem>
          <ButtonGroup>
            <Button onClick={() => handleButtonClick("1")}>1</Button>
            <Button onClick={() => handleButtonClick("2")}>2</Button>
            <Button onClick={() => handleButtonClick("3")}>3</Button>
          </ButtonGroup>
        </FlexGridItem>
      </FlexGrid>
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
        <button type="button" onClick={() => handleMemButtonClick()}>
          M+
        </button>
      </div>
      <div>
        <p>a : {a}</p>
        <p>ope : {operator}</p>
        <p>b : {b}</p>
        <p>ans : {ans}</p>
      </div>
      <div>
        <ul>
          {results.map((result, index) => (
            <li key={index} onClick={() => handleSetMem(index)}>
              {result.a} {result.ope} {result.b} = {result.ans}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
