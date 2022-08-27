import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import "./style.css";

function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);
  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand"> </div>
        {input !== "" || input === "0" ? (
          <NumberFormat
            value={input}
            displayType={"text"}
            thousandSeparator={true}
          />
        ) : (
          <NumberFormat
            value={preState}
            displayType={"text"}
            thousandSeparator={true}
          />
        )}
      </div>
      <div className="btn light-gray" onClick={reset}>
        <p>AC</p>
      </div>
      <div className="btn light-gray" onClick={percent}>
        <p>%</p>
      </div>
      <div className="btn light-gray" onClick={minusPlus}>
        <p>+/-</p>
      </div>
      <div className="btn orange" onClick={operatorType}>
        <p>/</p>
      </div>
      <div className="btn" onClick={inputNum}>
        <p>7</p>
      </div>
      <div className="btn" onClick={inputNum}>
        <p>8</p>
      </div>
      <div className="btn" onClick={inputNum}>
        <p>9</p>
      </div>
      <div className="btn orange" onClick={operatorType}>
        <p>X</p>
      </div>
      <div className="btn" onClick={inputNum}>
        <p>4</p>
      </div>
      <div className="btn" onClick={inputNum}>
        <p>5</p>
      </div>
      <div className="btn" onClick={inputNum}>
        <p>6</p>
      </div>
      <div className="btn orange" onClick={operatorType}>
        <p>+</p>
      </div>
      <div className="btn" onClick={inputNum}>
        <p>1</p>
      </div>
      <div className="btn" onClick={inputNum}>
        <p>2</p>
      </div>
      <div className="btn" onClick={inputNum}>
        <p>3</p>
      </div>
      <div className="btn orange" onClick={operatorType}>
        <p>-</p>
      </div>
      <div className="btn zero" onClick={inputNum}>
        <p>0</p>
      </div>
      <div className="btn" onClick={inputNum}>
        <p>.</p>
      </div>
      <div className="btn span-two" onClick={equals}>
        <p>=</p>
      </div>
    </div>
  );
}

export default App;
