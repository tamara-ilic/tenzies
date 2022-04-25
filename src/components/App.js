import '../App.css'
import { useState, useEffect } from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  
  const generateNewDie = () => {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  const generateAllNewDice = () => {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  const [dice, setDice] = useState(generateAllNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log('You won!')
    }
  }, [dice])

  
  const rollDice = () => {
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }))
    } else {
      setTenzies(false)
      setDice(generateAllNewDice())
    }
  }
  
  const holdDice = (id) => {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }
  
  const diceElements = dice.map(die =>
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
    )
  
  const buttonText = tenzies ? 'New Game' : 'Roll'

  return (
      <main>
        {tenzies && <Confetti />}
        <h1 className='game--title'>Tenzies</h1>
        <p className='game--instructions'>
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </p>
        <div className='die'>
          {diceElements}
        </div>
        <button className='roll-dice' onClick={rollDice}>{buttonText}</button>
      </main>
  )
}

export default App
