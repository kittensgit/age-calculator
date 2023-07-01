'./App.css'

import AgeCalculatorForm from "./components/AgeCalculatorForm"
import AgeResult from "./components/AgeResult"

function App() {

  const calculateAge = () =>{
    console.log('calc age')
  }

  return (
    <div>
      <h1>Age Calculator</h1>
      <AgeCalculatorForm calculateAge={calculateAge}/>
      <AgeResult />
    </div>
  )
}

export default App
