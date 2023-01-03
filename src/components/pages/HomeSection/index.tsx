import './style.scss'

const Home: React.FC<any> = () => {
    return (
        <main className='home-main'>
            <div className="saturn-wrapper">
                <div className='saturn' />
            </div>
            <div className="jupiter-wrapper">
                <div className='jupiter' />
            </div>
            <div className="earth-wrapper">
                <div className='earth' />
                <div className='moon' />
            </div>
        </main>
    )
}

export default Home