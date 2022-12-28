import RoundShape from '../../RoundShape'
import './style.scss'

const Home: React.FC<any> = () => {
    return (
        <main>
            <RoundShape className='saturn' />
            <RoundShape className='jupiter' />
            <RoundShape className='terra' />
            <RoundShape className='lua' />
        </main>
    )
}

export default Home