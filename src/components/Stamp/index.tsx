import { StampType } from '../../interfaces/types'
import './style.scss'

const Stamp : React.FC<StampType> = ({children}) => {
    return (
        <div className='stamp' >
            {children}
        </div>
    )
}

export default Stamp