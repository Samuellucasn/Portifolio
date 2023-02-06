import { StampType } from '../../interfaces/types'
import './style.scss'

const Stamp : React.FC<StampType> = ({children, style}) => {
    return (
        <div className='stamp' style={style}>
            {children}
        </div>
    )
}

export default Stamp