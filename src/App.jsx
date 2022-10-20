import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Col} from 'antd';
import {Searcher, PokemonCard} from './components';
import {getPokemons} from './api';
import { setPokemons as SetPokemonsMethod } from './actions';

function App({pokemons, setPokemones}) {

  //const [pokemons, setPokemones] = useState([]);

  const getData = async () => {
    const data = await getPokemons();
    setPokemones(data);
  };

  useEffect(() => {
    
    getData();

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
};


const mapStateToProps = state => ({

  pokemons: state.pokemons

});

const mapDispatchToProps = dispatch => ({

  setPokemones: (value) => dispatch(SetPokemonsMethod(value))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
