import { useState, useEffect } from 'react'
import { clickArray } from '../../../interfaces/types'
import './style.scss'

import Star from '../../Star'

import {HiCursorClick} from 'react-icons/all'

const Home: React.FC<any> = () => {
    const [clickArray, setClickArray] = useState<clickArray[]>([])

    useEffect(() => {
        const interval = setInterval(() => {
            setClickArray(
                clickArray
                    .map((axis: clickArray) => (
                    {...axis, t: axis.t - .1}
                    ))
                    .filter((axis: clickArray) => {
                        return axis.t > 1 
                    })
            )
        }, 100)

        
        return () => clearInterval(interval)
    }, [clickArray])
    console.log(clickArray)

    return (
        <>
            <section className='home-main' onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => setClickArray([...clickArray, {x: e.pageX, y: e.pageY, t: 62}])}>

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
                clickArray.map( (axis: clickArray, id: number) => {
                    return <Star key={id} x={axis.x} y={axis.y} />
                })
            }
        </>
    )
}

export default Home