import React from 'react'
import Image from 'next/image'

import {GlobeAltIcon, MenuIcon, UserCircleIcon, SearchIcon,UsersIcon} from '@heroicons/react/solid'

const Header = () => {
  return (
   <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
   
    <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image  className="object-contain object-left"
          src='https://links.papareact.com/qd3'
          layout = "fill"
          
        />
    </div>
    <div className='flex flex-center md:border-2 rounded-full py-2 shadow-sm'>
       <input className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your search'/>
       <SearchIcon className='h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex mx-2'/>
    </div>
    <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden cursor-pointer md:inline'>Became a host</p>
        <GlobeAltIcon className='h-6'/>
        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
            <MenuIcon className='h-6'/>
            <UserCircleIcon className='h-6'/>
        </div>
    </div>
   </header>
  )
}

export default Header