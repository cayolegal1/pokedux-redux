import {Card} from 'antd'
import {StarOutlined} from '@ant-design/icons'

export const PokemonCard = () => {

  return (
        
        <Card 
            title="Bulbasaur"
            cover={<img src='https://i.pinimg.com/originals/82/42/25/824225f61b9e0efb7e7405f8c9579f6c.png' alt='Bulbasaur'/>}
            style={{width: 250}}
            extra={<StarOutlined />} >

        </Card>
    )
}
