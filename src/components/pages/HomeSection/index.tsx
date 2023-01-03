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
            <main className='home-main' onClick={(e: any) => {setClickArray([e.clientX, e.clientY])}}>
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
            {
                clickArray.map( (axis: any) => {
                    <Star />
                })
            }
        </>
    )
}

export default Home