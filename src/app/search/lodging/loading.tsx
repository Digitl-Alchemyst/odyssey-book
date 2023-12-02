import { Skeleton } from '@/c/ui/skeleton';

function LoadingResults() {
  return (
    <section>
      <div className='mx-w-7xl mx-auto'>
        <p className='animat-pulse pt-10 text-center font-bold text-sun-600'>
          Please hang on while we scan the market for the best prices and
          hottest deals!
        </p>
      </div>

      <div className='flex justify-center py-10'>
        <div className='h-10 w-10 animate-bounce rounded-full bg-fire-500' />
      </div>

      <div className='space-y-2 p-5'>
        {[...Array(10)].map((_, i) => (
          <div key={i} className='max-w-7-xl mx-auto flex space-x-2'>
            <Skeleton className='h-20 w-20 rounded-lg md:h-44 md:w-44' />
            <Skeleton className='h-44 w-full rounded-lg' />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LoadingResults;
