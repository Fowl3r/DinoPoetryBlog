/* 🪲 BUG REPORT 🪲:
when using the turbo-webpack posts that have been deleted appear on refresh and when page is refreshed after creating/deleteing a post the posts do not appear 


*/

/* 🗺️Plan🗺️:
Create & Style NavBar ✅
Create & Style poem compose page ✅
Style home page. ✅
Style Blog posts page:
    - page 
    -each post
create auth
allow logged in user to:
protected routes
    edit
    delete
    create
    upload pictures
    select category ✅
*/

import mushroom from '../public/mushrooms.svg'
import Image from 'next/image'

export default function Homepage(){

    return (
        <div className='home-div'>
        <Image src={mushroom} alt='cartoon mushroom' className='home-pic' />
            <h1 className='home-title'>About</h1>
            <p className='home-paragraph'>i am Parv lord of the mushrooms and writer of the poems, plant enthusiast and eccentric bish. Power to the plants, fuck them people!  </p>

        </div>
    )
}