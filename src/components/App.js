import '../App.css'
import Die from './Die'

function App() {
  return (
      <main>
        <h1 className='game--title'>Tenzies</h1>
        <div className='die'>
          <Die value={1} />
          <Die value={2} />
          <Die value={3} />
          <Die value={4} />
          <Die value={5} />
          <Die value={6} />
          <Die value={7} />
          <Die value={8} />
          <Die value={9} />
          <Die value={10} />
        </div>
      </main>
  )
}

export default App
