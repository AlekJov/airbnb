import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import format from 'date-fns/format'
import { SearchCircleIcon } from '@heroicons/react/solid'
import Infocard from '../components/Infocard'

const Search = ({searchResults}) => {
    console.log(searchResults)
    const router = useRouter();
    const {location,startDate,endDate,noOfGuests} = router.query;
    const formatedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formatedStartDate} - ${formatedEndDate}`
  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuests}`}/>
          <main className='flex '>
            <section className='flex-grow pt-14 px-6 '>
                <p className='text-extra-small'>300+ Stays - {range} - for {noOfGuests}  guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancelation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Beds</p>
                    <p className='button'>More Filters</p>
                </div>
              <div className='flex flex-col'>
                {searchResults.map(item=>(
                    <Infocard
                     img = {item.img}
                     location = {item.location}
                     title = {item.title}
                     description = {item.description}
                     star = {item.star}
                     price = {item.price}
                     total = {item.total}
                    />
                ))}
                </div>
            </section>
          </main>
        <Footer/>
    </div>
  )
}

export default Search

export async function getServerSideProps(context){
    const searchResults = await fetch ("https://www.jsonkeeper.com/b/5NPS").then((res)=>res.json())
    return {
        props:{
            searchResults,
    }
    }
}