/* eslint-disable @next/next/no-img-element */
import { lodgingResults } from '@/util/fetch/lodgingResults';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  searchParams: SearchParams;
};

export type SearchParams = {
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
};

async function SearchPage({ searchParams }: Props) {
  if (!searchParams.url) return notFound();

  const results = await lodgingResults(searchParams);

  if (!results) return <div>No results...</div>;

  return (
    <section>
      <div className='mx-auto max-w-7xl p-6 text-sand-900 lg:px-8'>
        <h1 className='pb-3 text-4xl font-bold'>Your Trip Results:</h1>
        <h2 className='pb-3'>
          Dates of Trip:
          <span className='ml-2 italic'>
            {searchParams.checkin} to {searchParams.checkout}
          </span>
        </h2>

        <hr className='mb-5' />

        <h3 className='text-xl font-semibold'>
          {results.content.total_listings}
        </h3>
      </div>

      <div className='mx-auto mt-5 max-w-7xl space-y-2 px-6 lg:px-8'>
        {results.content.listings.map((item, i) => (
          <div
            key={i}
            className='flex justify-between space-x-4 space-y-2 rounded-lg border p-5'
          >
            <img
              src={item.url}
              alt='image of property'
              className='lg:h-55 lg:w-55 h-44 w-44 rounded-lg'
            />

            <div className='flex flex-1 justify-between space-x-5'>
              <div>
                <Link href={item.link} className='font-bold text-fire-500'>
                  {item.title}
                </Link>
                <p className='text-xs'>{item.description}</p>
              </div>
              <div className='flex flex-col justify-between'>
                <div className='flex items-start justify-end space-x-2 text-right'>
                  <div>
                    <p className='font-bold'>{item.rating_word}</p>
                    <p className='text-sm'>{item.rating_count}</p>
                  </div>
                  <p className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sun-700 text-sm font-bold text-sand-200'>
                    {item.rating || 'N/A'}
                  </p>
                </div>
                <div className='text-right'>
                  <p className='text-xs'>{item.booking_metadata}</p>
                  <p className='text-2xl font-bold'>{item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SearchPage;
