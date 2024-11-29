import { useState } from 'react'
import './App.css'

function App() {
  const [selectedButtons, setSelectedButtons] = useState([])
  const [sum, setSum] = useState(0)

  const handleButtonClick = (value) => {
    if (selectedButtons.length < 2) {
      const newSelected = [...selectedButtons, value]
      setSelectedButtons(newSelected)
      
      if (newSelected.length === 2) {
        setSum(newSelected[0] + newSelected[1])
      }
    } else {
      // Reset if two buttons were already selected
      setSelectedButtons([value])
      setSum(0)
    }
  }

  return (
    <>
      <div>
        <button onClick={() => handleButtonClick(1)}> 1 </button>
        <button onClick={() => handleButtonClick(2)}> 2 </button>
        <button onClick={() => handleButtonClick(3)}> 3 </button>
        <button onClick={() => handleButtonClick(4)}> 4 </button>
      </div>
      <div>
        Selected buttons: {selectedButtons.join(', ')}
      </div>
      <div>
        Sum: {sum}
      </div>
    </>
  )
}

export default App