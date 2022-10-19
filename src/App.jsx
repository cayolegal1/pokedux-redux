import { useEffect, useState } from 'react'
import {Col} from 'antd'
import {Searcher, PokemonCard} from './components';
import {getPokemons} from './api'

function App() {

  const [pokemons, setPokemons] = useState([]);

  const getData = async () => {
    const data = await getPokemons();
    setPokemons(data);
  };

  useEffect(() => {
    
    getData();

    return console.log('Destruido')
  }, [])

  return (
    <div className="container">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>

      <Col span={8} className='pokemons-container'>
        <PokemonCard pokemons={pokemons} />
      </Col>  
    </div>
  )
}



export default App
