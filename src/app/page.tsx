/* eslint-disable @next/next/no-img-element */
import { trending_data } from '@/data/trending';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='bg-green-700/90 pb-8'>
      <section className='mx-auto  w-full max-w-7xl justify-start px-6 py-3 lg:px-8'>
        <h2 className='text-5xl font-bold text-sand-400'>
          Your Digital Travel Assisstant
        </h2>
        <h3 className='text-xl text-sand-200'>
          Search for best prices on lodging, flights, auto rentals, attractions,
          and more...
        </h3>
      </section>

      <section>{/* Search Form  */}</section>

      <section className='mx-auto w-full max-w-7xl justify-start px-6 py-3 lg:px-8 bg-green-100 rounded-lg mb-4'>
        {/* Trending Section  */}
        <div className=''>
          <h3 className='text-xl font-bold text-sand-600'>Trending Destinations</h3>
          <p className='text-sand-700 font-light'>The hottest destinations from around the world</p>
        </div>
        <div className='flex space-x-4 py-5 overflow-x-scroll'>
          {trending_data.map((item) => (
            <div key={item.id} className='space-y-1 shrink-0 cursor-pointer '>
              <img
                key={item.id}
                src={item.img}
                alt='Trending Desitination Photo'
                className='w-80 h-72 object-cover rounded-md pb-2'
              />

              <p className='font-bold text-sand-700'>{item.title}</p>
              <p className='text-sand-600'>{item.location}</p>
              <p className='text-sand-800 font-light text-sm'>{item.offer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
