import { useState } from 'react'
import './style.scss'

import Star from '../../Star'

import {HiCursorClick} from 'react-icons/all'

interface clickArray {
    x: number,
    y: number, 
    t: number
}

const Home: React.FC<any> = () => {
    const [clickArray, setClickArray] = useState<clickArray[]>([])

    clickArray && setInterval(() => {
        clickArray.map((axis: any) => {
            axis.t -= 5
        })
    }, 5000)

    console.log(clickArray)

    return (
        <>
            <section className='home-main' onClick={(e: any) => setClickArray([...clickArray, {x: e.clientX, y: e.clientY, t: 90}])}>

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
                <div className="click-star">
                    <HiCursorClick />
                    <p>crie uma estrela</p>
                </div>
                
                <div className='background'/>

                <div className="welcome-text">
                    <p>Front-End Developer</p>
                    <h1>Samuel Lucas</h1>
                </div>
            </section>
            {
                clickArray.map( (axis: any, id: number) => {
                    return <Star key={id} x={axis.x} y={axis.y} />
                })
            }
        </>
    )
}

export default Home