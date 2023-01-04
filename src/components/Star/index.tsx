import './style.scss'

const Star : React.FC<any> = ({x, y}) => {
    return (
        <div className='star' style={{left: x, top: y}}/> 
    )
}

export default Star