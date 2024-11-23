import { useState } from "react"

import MainHeader from "./components/MainHeader"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1500,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  function handleChange(inputIdetifier, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdetifier]: newValue,
      }
    })
  }

  return (
    <>
      <MainHeader />
      <UserInput values={userInput} onSet={handleChange}></UserInput>
      {userInput.duration >= 1 ? (
        <Result data={userInput}></Result>
      ) : (
        <p className='center'>Your input is valid</p>
      )}
    </>
  )
}

export default App
