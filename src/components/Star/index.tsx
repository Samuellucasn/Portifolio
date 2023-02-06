import { StarType } from '../../interfaces/types'
import './style.scss'

const Star : React.FC<StarType> = ({x, y}) => {
    return (
        <div className='star' style={{left: x, top: y}}/> 
    )
}

export default Star