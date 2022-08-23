import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          <h1>calculator Operand</h1>
        </div>
        <div className="current-operand">
        <h1>calculator current Operand</h1>

        <Calculator/>
        </div>
      </div>
    </div>
  )
}

export default App;
