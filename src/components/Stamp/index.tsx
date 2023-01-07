import './style.scss'

const Stamp : any = ({children, style} : any) => {
    return (
        <div className='stamp' style={style}>{children}</div>
    )
}

export default Stamp