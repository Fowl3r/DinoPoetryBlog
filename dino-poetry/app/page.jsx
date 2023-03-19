import mushroom from '../public/mushrooms.svg'
import Image from 'next/image'

export default function Homepage(){

    return (
        <div className='home-div'>
        <Image src={mushroom} alt='cartoon mushroom' className='home-pic' />
            <h1 className='home-title'>About</h1>
            <p
            className='home-paragraph'>
            i am Parv lord of the mushrooms and writer of the poems, plant enthusiast and eccentric bish. Power to the plants, fuck them people!  
            </p>

        </div>
    )
}