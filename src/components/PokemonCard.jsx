import {Card} from 'antd';
import {StarOutlined} from '@ant-design/icons';

export const PokemonCard = ({pokemons}) => {

  return (
        
        <>
            {pokemons.map(pokemon => (<Card 
                key={pokemon.name}
                title={pokemon.name}
                cover={
                <img src='https://i.pinimg.com/originals/82/42/25/824225f61b9e0efb7e7405f8c9579f6c.png'
                 alt={pokemon.name} title={pokemon.name} />}
                style={{width: 250}}
                extra={<StarOutlined />} >
            </Card>))}
        </>
    )
}

PokemonCard.defaultProps = {

    pokemons: Array(10).fill('')
}