import { ReactElement, useState } from 'react'
import './style.scss'

import Star from '../../Star'

interface clickArray {
    x: number,
    y: number
}

const Home: React.FC<any> = () => {
    const [clickArray, setClickArray] = useState<clickArray[]>([])

    return (
        <>
            <main className='home-main' onClick={(e: any) => setClickArray([...clickArray, {x: e.clientX, y: e.clientY}])}>

                <div className="saturn-wrapper">
                    <div className='saturn' >
                        <div className='ring'/>
                    </div>
                </div>
                <div className="jupiter-wrapper">
                    <div className='jupiter' />
                </div>
                <div className="earth-wrapper">
                    <div className='earth' />

                    <div className="moon-wrapper">
                        <div className='moon' />
                    </div>
                </div>
                
                <div className='background'/>

                <div className="welcome-text">
                    {/* <p>Bem vindo ao meu</p>
                    <h1>Portifolio</h1> */}
                </div>
            </main>
            {
                clickArray.map( (axis: any, id: number) => {
                    return <Star key={id} x={axis.x} y={axis.y} />
                })
            }
        </>
    )
}

export default Home