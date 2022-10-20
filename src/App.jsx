import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Col} from 'antd';
import {Searcher, PokemonCard} from './components';
import {getPokemons} from './api';
import { setPokemons } from './actions';
//import { connect, useDispatch, useSelector } from 'react-redux';
//import { setPokemons as SetPokemonsMethod } from './actions';

function App({}) {

  //const [pokemons, setPokemones] = useState([]);

  const pokemons = useSelector(state => state.pokemons);

  const dispatch = useDispatch();

  const getData = async () => {

    //Recibimos los pokemones
    const payloadData = await getPokemons();

    //Disparamos nuestra acción de tipo setPokemons y pasamos como payload la data (los pokemones)
    dispatch(setPokemons(payloadData));

    //setPokemones(payloadData);
  };

  useEffect(() => {
    
    getData();

  }, []);

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


// const mapStateToProps = state => ({

//   pokemons: state.pokemons

// });

// const mapDispatchToProps = dispatch => ({

//   setPokemones: (value) => dispatch(SetPokemonsMethod(value))
// });

//export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
