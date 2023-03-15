/* 🪲 BUG REPORT 🪲:
when using the turbo-webpack posts that have been deleted appear on refresh and when page is refreshed after creating/deleteing a post the posts do not appear 
Bullet list, numbered list and block quote functionality not working
each post page error 
Unhandled Runtime Error
Error: Objects are not valid as a React child (found: object with keys {content, type}). If you meant to render a collection of children, use an array instead.

*/

/* 🗺️Plan🗺️:
Create & Style NavBar ✅
Create & Style poem compose page ✅

!^^^ incorporate rich text editor
Style home page. ✅
!Style Blog posts page:
    - page 
    - fallback image if none uploaded
    -each post

!Create ability to share on socials
!create auth
allow logged in user to:
protected routes
    edit
    delete
    create
    upload pictures
    select category ✅
! go through code base for accessibility, using ARIA and test with screen reader
!Testing

    STRETCH GOALS:
    incorporate text to speech
*/

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