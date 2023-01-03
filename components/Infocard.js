import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import {HeartIcon} from '@heroicons/react/outline'
const Infocard = ({img,location,title,description,star,price,total}) => {
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t'>
        <div className='relative h-24 w-40 md:h-52 md:w-60 flex-shrink-0'>
            <Image src={img} layout="fill" />
        </div>
        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
                <p className='text-xs md:text-sm'>{location}</p>
                <HeartIcon className='h-7 cursor-pointer'/>
            </div>
            <h4 className='text-xl'>{title}</h4>
            <div className='border-b w-10 pt-2'></div>
            <p className='pt-2 text-xs text-gray flex-grow md:text-sm'>{description}</p>
            <div className='flex justify-between items-end pt-5'>
                <p className='flex items-center'>
                    <StarIcon className='h-5 text-red-400'/>
                    {star}
                </p>
                <div>
                    <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
                    <p className='text-right font-extralight'>{total}</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Infocard