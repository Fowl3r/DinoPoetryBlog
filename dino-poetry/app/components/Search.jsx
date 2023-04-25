'use client'
import { useState } from "react";
import searchIcon from '../../public/searchIconDark.svg'
import { FaWindowClose } from "react-icons/fa";
import Image from "next/image";
import { pb } from "../lib/pocketbase";


/* 
PLAN: 
when search button is pressed, toggle this like Burger Menu ✅
Have a dark overlay ✅
search bar in the middle
search through database for poem - title ✅ / tags
return result/s  under search bar as cards that link to poem page?
takes you to the poem page? < Is this best implementation?
*/
export default function Search() {
    const [search, setSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    function searchBar(){
        setSearch(!search);
    }

    function onChange(e){
      setSearchValue(e.target.value);
      databaseLookup(e.target.value); 
    }

   async  function databaseLookup(searchValue){
     const results = await pb.collection('posts').getList(1, 50, {
      filter: `title?~"${searchValue}"`,
      timeout: 300,
     });
     if (results.totalItems === 0) {
      console.log('No records found.');
    } else {
      console.log(results.items[0].title);
    }
    }

  

  return (
    <>
    {search ?
    <button className="burger-close-container">
    <FaWindowClose onClick={searchBar} className='burger-close' />
    </button>
    :
   <button>
    <Image src={searchIcon} alt='magnifying glass' onClick={searchBar} className='footer-menu-icon' />
   </button>
    }
    <div className={
        search
        ? 'search-bar-overlay'
        : 'search-bar-hidden'}>
        <div className='search-bar-container'>
        <p className='text-white'>Search for a poem</p>
        <input className='search-bar' type='text' onChange={onChange} />
        </div>
    </div>
    </>
  )
}
