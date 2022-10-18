import { useState } from 'react'
import {Col} from 'antd'
import {Searcher, PokemonCard} from './components'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Pokedux</h1>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <Col span={8}>
        <PokemonCard />
      </Col>
      
    </div>
  )
}

export default App
