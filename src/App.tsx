import React, { useState } from "react";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { ListItem, ListItemLabel } from "baseui/list";
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
  const button_style = css({
    width: "3rem",
  });

  return (
    <div
      className={css({
        paddingTop: "5rem",
        paddingLeft: "5rem",
      })}
    >
      <FlexGrid
        flexGridColumnCount={1}
        flexGridRowGap="scale400"
        flexGridColumnGap="scale200"
      >
        <FlexGridItem>
          <ButtonGroup>
            <Button
              onClick={() => handleMemButtonClick()}
              className={button_style}
            >
              M+
            </Button>
            <Button className={button_style}>M-</Button>
            <Button
              onClick={() => handleOpeButtonClick("%")}
              className={button_style}
            >
              %
            </Button>
            <Button
              onClick={() => handleClearButtonClick()}
              className={button_style}
            >
              C
            </Button>
          </ButtonGroup>
        </FlexGridItem>
        <FlexGridItem>
          <ButtonGroup>
            <Button
              onClick={() => handleButtonClick("7")}
              className={button_style}
            >
              7
            </Button>
            <Button
              onClick={() => handleButtonClick("8")}
              className={button_style}
            >
              8
            </Button>
            <Button
              onClick={() => handleButtonClick("9")}
              className={button_style}
            >
              9
            </Button>
            <Button
              onClick={() => handleOpeButtonClick("/")}
              className={button_style}
            >
              /
            </Button>
          </ButtonGroup>
        </FlexGridItem>
        <FlexGridItem>
          <ButtonGroup>
            <Button
              onClick={() => handleButtonClick("4")}
              className={button_style}
            >
              4
            </Button>
            <Button
              onClick={() => handleButtonClick("5")}
              className={button_style}
            >
              5
            </Button>
            <Button
              onClick={() => handleButtonClick("6")}
              className={button_style}
            >
              6
            </Button>
            <Button
              onClick={() => handleOpeButtonClick("*")}
              className={button_style}
            >
              *
            </Button>
          </ButtonGroup>
        </FlexGridItem>
        <FlexGridItem>
          <ButtonGroup>
            <Button
              onClick={() => handleButtonClick("1")}
              className={button_style}
            >
              1
            </Button>
            <Button
              onClick={() => handleButtonClick("2")}
              className={button_style}
            >
              {" "}
              2
            </Button>
            <Button
              onClick={() => handleButtonClick("3")}
              className={button_style}
            >
              3
            </Button>
            <Button
              onClick={() => handleOpeButtonClick("-")}
              className={button_style}
            >
              -
            </Button>
          </ButtonGroup>
        </FlexGridItem>
        <FlexGridItem>
          <ButtonGroup>
            <Button
              onClick={() => handleButtonClick("0")}
              className={button_style}
            >
              0
            </Button>
            <Button onClick={() => handleCommaClick()} className={button_style}>
              .
            </Button>
            <Button
              onClick={() => handleEqualButtonClick()}
              className={button_style}
            >
              =
            </Button>
            <Button
              onClick={() => handleOpeButtonClick("+")}
              className={button_style}
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
            <ListItem key={index} onClick={() => handleSetMem(index)}>
              <ListItemLabel description={result.ans}>
                {result.a} {result.ope} {result.b}
              </ListItemLabel>
            </ListItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
