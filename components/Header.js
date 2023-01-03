import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';


import {GlobeAltIcon, MenuIcon, UserCircleIcon, SearchIcon,UsersIcon} from '@heroicons/react/solid'


const Header = ({placeholder}) => {
  const router = useRouter()
  const [searchInput,setsearchInput] = useState('');
  const [startDate,setStartDate] = useState(new Date())
  const [endDate,setEndDate] = useState(new Date())
  const [noOfGuests,setNoOfGuests] = useState(1)
  const selectionRanges = {
    startDate:startDate,
    endDate: endDate,
    key:"selection"
  }
  const handleSelect = (ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  const resetInput = () =>{
    setsearchInput('')
  }

  const search = () =>{
    router.push({
      pathname: '/search',
      query: {
        location:searchInput,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        noOfGuests
      }
    })
  }

  return (
   <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
   
    <div onClick={()=>router.push("/")} className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image  className="object-contain object-left"
          src='https://links.papareact.com/qd3'
          layout = "fill"
          
        />
    </div>
    <div className='flex flex-center md:border-2 rounded-full py-2 shadow-sm'>
       <input
       value={searchInput}
       onChange = {(e)=> setsearchInput(e.target.value)}
       className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type="text" placeholder={placeholder || 'Start your search'}/>
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
    {searchInput && 
    <div className='flex flex-col col-span-3 mx-auto max-w-md'>
      <DateRangePicker
      ranges={[selectionRanges]}
      minDate = {new Date()}
      rangeColors = {["#FD5B61"]}
      onChange = {handleSelect}
      />
      <div className='flex items-center border-b mb-4'>
        <h2 className='text-2xl pl-2 flex-grow font-semibold'>Number of guests</h2>
        <UsersIcon className='h-5'/>
        <input min={1} onChange={(e)=>setNoOfGuests(e.target.value)} value={noOfGuests} type="number" className='w-12 pl-2 text-lg outline-none text-red-400'/>
      </div>
      <div className='flex'>
        <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
        <button onClick={search} className='flex-grow text-red-400'>Search</button>
      </div>
    </div>
    }
   </header>
  )
}

export default Header