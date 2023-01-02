import RoundShape from '../../RoundShape'
import './style.scss'

const Home: React.FC<any> = () => {
    return (
        <main className='home-main'>
            <div className="saturn-wrapper">
                <RoundShape className='saturn' />
            </div>
            <div className="jupiter-wrapper">
                <RoundShape className='jupiter' />
            </div>
            <div className="earth-wrapper">
                <RoundShape className='earth' />
                <RoundShape className='moon' />
            </div>
        </main>
    )
}

export default Home