import Head from 'next/head';
import Header from '../components/Header'
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';


export default function Home({exploreData, cardsData}) {
  
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
       
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'> 
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* pull data from server*/ }
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData.map((item)=>{   
           return <SmallCard key={item.img} img = {item.img} distance={item.distance} location={item.location}/>
          })}
          </div>
          
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className='flex space-x-3 p-3 -ml-3 overflow-auto [@media(max-width:767px)]:scrollbar-hide'>
          {cardsData.map((item) =>{
         return <MediumCard img={item.img} title ={item.title} key = {item.img}/>
            })}
          </div>
        
        </section>
        <LargeCard 
         img="https://links.papareact.com/4cj"
         title = "The greatest Outdors"
         description= "Wishlist curated bu Airbnb"
         buttontext = "Get Inspired"
        />

      </main>
       <Footer/>
      </div>
  )
}


export async function getStaticProps(){
  const exploreData = await fetch ("https://www.jsonkeeper.com/b/4G1G").
  then((res)=>res.json())

  const cardsData = await await fetch("https://www.jsonkeeper.com/b/VHHT").
  then((res) => res.json())

  return {
    props:{
      exploreData,
      cardsData
    }
  }
}