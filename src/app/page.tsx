/* eslint-disable @next/next/no-img-element */
import SearchForm from '@/components/search/SearchForm';
import { trending_data } from '@/data/trending';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='bg-forest-700/60 pb-8'>
      <section className='mx-auto  w-full max-w-7xl justify-start px-6 py-3 lg:px-8'>
        <h2 className='text-5xl font-bold text-sand-400'>
          Your Digital Travel Assisstant
        </h2>
        <h3 className='text-xl text-sand-200'>
          Search for best prices on lodging, flights, auto rentals, attractions,
          and more...
        </h3>
      </section>

      <section className='m-4 -mb-14 mt-0 px-2 lg:px-4'>
        <SearchForm />
      </section>

      <section className='mx-auto mb-4 mt-10 w-full max-w-7xl justify-start rounded-lg bg-forest-100 px-6 py-8 shadow-xl shadow-sun-800/60 lg:px-8'>
        {/* Trending Section  */}
        <div className=''>
          <h3 className='text-xl font-bold text-sand-600'>
            Trending Destinations
          </h3>
          <p className='font-light text-sand-700'>
            The hottest destinations from around the world
          </p>
        </div>
        <div className='flex space-x-4 overflow-x-scroll py-5'>
          {trending_data.map((item) => (
            <div key={item.id} className='shrink-0 cursor-pointer space-y-1 '>
              <img
                key={item.id}
                src={item.img}
                alt='Trending Desitination Photo'
                className='mb-4 h-72 w-80 rounded-md object-cover shadow-lg shadow-sun-800/60'
              />

              <p className='font-bold text-sand-700'>{item.title}</p>
              <p className='text-sand-600'>{item.location}</p>
              <p className='text-sm font-light text-sand-800'>{item.offer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
