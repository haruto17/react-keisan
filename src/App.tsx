import React, { useState } from "react";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { useStyletron } from "styletron-react";

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

  const [css] = useStyletron();

  return (
    <div>
      <FlexGrid
        flexGridColumnCount={1}
        flexGridRowGap="scale400"
        flexGridColumnGap="scale200"
      >
        <FlexGridItem>
          <ButtonGroup>
            <Button
              onClick={() => handleMemButtonClick()}
              className={css({
                width: "3rem",
              })}
            >
              M+
            </Button>
            <Button
              className={css({
                width: "3rem",
              })}
            >
              M-
            </Button>
            <Button
              onClick={() => handleOpeButtonClick("%")}
              className={css({
                width: "3rem",
              })}
            >
              %
            </Button>
            <Button
              onClick={() => handleClearButtonClick()}
              className={css({
                width: "3rem",
              })}
            >
              C
            </Button>
          </ButtonGroup>
        </FlexGridItem>
        <FlexGridItem>
          <ButtonGroup>
            <Button
              onClick={() => handleButtonClick("7")}
              className={css({
                width: "3rem",
              })}
            >
              7
            </Button>
            <Button
              onClick={() => handleButtonClick("8")}
              className={css({
                width: "3rem",
              })}
            >
              8
            </Button>
            <Button
              onClick={() => handleButtonClick("9")}
              className={css({
                width: "3rem",
              })}
            >
              9
            </Button>
            <Button
              onClick={() => handleOpeButtonClick("/")}
              className={css({
                width: "3rem",
              })}
            >
              /
            </Button>
          </ButtonGroup>
        </FlexGridItem>
        <FlexGridItem>
          <ButtonGroup>
            <Button
              onClick={() => handleButtonClick("4")}
              className={css({
                width: "3rem",
              })}
            >
              4
            </Button>
            <Button
              onClick={() => handleButtonClick("5")}
              className={css({
                width: "3rem",
              })}
            >
              5
            </Button>
            <Button
              onClick={() => handleButtonClick("6")}
              className={css({
                width: "3rem",
              })}
            >
              6
            </Button>
            <Button
              onClick={() => handleOpeButtonClick("*")}
              className={css({
                width: "3rem",
              })}
            >
              *
            </Button>
          </ButtonGroup>
        </FlexGridItem>
        <FlexGridItem>
          <ButtonGroup>
            <Button
              onClick={() => handleButtonClick("1")}
              className={css({
                width: "3rem",
              })}
            >
              1
            </Button>
            <Button
              onClick={() => handleButtonClick("2")}
              className={css({
                width: "3rem",
              })}
            >
              {" "}
              2
            </Button>
            <Button
              onClick={() => handleButtonClick("3")}
              className={css({
                width: "3rem",
              })}
            >
              3
            </Button>
            <Button
              onClick={() => handleOpeButtonClick("-")}
              className={css({
                width: "3rem",
              })}
            >
              -
            </Button>
          </ButtonGroup>
        </FlexGridItem>
        <FlexGridItem>
          <ButtonGroup>
            <Button
              onClick={() => handleButtonClick("0")}
              className={css({
                width: "3rem",
              })}
            >
              0
            </Button>
            <Button
              onClick={() => handleCommaClick()}
              className={css({
                width: "3rem",
              })}
            >
              .
            </Button>
            <Button
              onClick={() => handleEqualButtonClick()}
              className={css({
                width: "3rem",
              })}
            >
              =
            </Button>
            <Button
              onClick={() => handleOpeButtonClick("+")}
              className={css({
                width: "3rem",
              })}
            >
              +
            </Button>
          </ButtonGroup>
        </FlexGridItem>
      </FlexGrid>
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
