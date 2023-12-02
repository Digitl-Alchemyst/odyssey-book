'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/c/ui/popover';
import { Input } from '@/components/ui/input';
import { GiGlobe } from 'react-icons/gi';
import { FaChildren } from 'react-icons/fa6';
import { ImCalendar, ImManWoman } from 'react-icons/im';
import { RiHotelBedLine } from 'react-icons/ri';
import { format } from 'date-fns';
import { Calendar } from '../ui/calendar';
import { FaSearchLocation } from 'react-icons/fa';

export const formSchema = z.object({
  location: z.string().min(2).max(55),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z
    .string()
    .min(1, {
      message: 'Please select at least 1 adult',
    })
    .max(12, {
      message: 'Max 12 adult occupancy',
    }),
  children: z.string().min(0).max(12, {
    message: 'Max 12 children occupancy',
  }),
  rooms: z.string().min(1, {
    message: 'Please select at least 1 room',
  }),
});

const defaultValues = {
  location: '',
  dates: {
    from: undefined,
    to: undefined,
  },
  adults: '1',
  children: '0',
  rooms: '1',
};

function SearchForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const checkin_monthday = values.dates.from.getDate().toString();
    const checkin_month = (values.dates.from.getMonth() + 1).toString();
    const checkin_year = values.dates.from.getFullYear().toString();
    const checkout_monthday = values.dates.to.getDate().toString();
    const checkout_month = (values.dates.to.getMonth() + 1).toString();
    const checkout_year = values.dates.to.getFullYear().toString();

    const checkin = `${checkin_year}-${checkin_month}-${checkin_monthday}`;
    const checkout = `${checkout_year}-${checkout_month}-${checkout_monthday}`;

    const url = new URL('https://www.booking.com/searchresults.html?');
    url.searchParams.set('ss', values.location);
    url.searchParams.set('group_adults', values.adults);
    url.searchParams.set('group_children', values.children);
    url.searchParams.set('no_rooms', values.rooms);
    url.searchParams.set('checkin', checkin);
    url.searchParams.set('checkout', checkout);

    router.push(`/search/lodging/?url=${url.href}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col items-center justify-center space-x-0 space-y-4 rounded-lg lg:mx-auto lg:max-w-6xl lg:flex-row lg:space-x-2 lg:space-y-0'
      >
        <div className='grid w-full items-center gap-1.5 lg:max-w-sm'>
          <FormField
            control={form.control}
            name='location'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='flex space-x-2 text-sand-200'>
                  <GiGlobe className='ml-2 h-4 w-4 text-sand-300' />
                  <p>Location</p>
                </FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    placeholder='Amsterdam, Netherlands'
                    className='w-full bg-sand-100'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className='grid items-center gap-1.5 lg:max-w-sm'>
          <FormField
            control={form.control}
            name='dates'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='flex space-x-2 text-sand-200'>
                  <RiHotelBedLine className='ml-2 h-4 w-4 text-sand-300' />
                  <p>Dates</p>
                </FormLabel>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button className='w-full justify-start bg-sand-800 text-left font-normal text-sand-200 hover:bg-sun-700 lg:w-[300px]'>
                        <ImCalendar className=' mr-3 h-4 w-4 text-sand-400 opacity-50' />
                        {field.value?.from ? (
                          field.value?.to ? (
                            <>
                              {format(field.value?.from, 'LLL dd, y')} -{' '}
                              {format(field.value?.to, 'LLL dd, y')}
                            </>
                          ) : (
                            format(field.value?.from, 'LLL dd, y')
                          )
                        ) : (
                          <span>Select your dates</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      initialFocus
                      mode='range'
                      selected={field.value}
                      defaultMonth={field.value.from}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                      className='bg-sand-100'
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
        </div>

        <div className='flex w-full items-center space-x-2'>
          <div className='grid w-full flex-1 items-center'>
            <FormField
              control={form.control}
              name='adults'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='flex space-x-2 text-sand-200'>
                    <GiGlobe className='ml-2 h-4 w-4 text-sand-300' />
                    <p>Adults</p>
                  </FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      type='number'
                      placeholder='Adults'
                      className='bg-sand-100'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className='grid w-full flex-1 items-center'>
            <FormField
              control={form.control}
              name='children'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='flex space-x-2 text-sand-200'>
                    <GiGlobe className='ml-2 h-4 w-4 text-sand-300' />
                    <p>Children</p>
                  </FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      type='number'
                      placeholder='Children'
                      className='bg-sand-100'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className='grid w-full flex-1 items-center'>
            <FormField
              control={form.control}
              name='rooms'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='flex space-x-2 text-sand-200'>
                    <GiGlobe className='ml-2 h-4 w-4 text-sand-300' />
                    <p>Rooms</p>
                  </FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      type='number'
                      placeholder='Rooms'
                      className='bg-sand-100'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className='mt-auto'>
            <Button type='submit' className='bg-sun-500 text-base'>
              <p className='mr-2 text-sand-200'>Search</p>
              <FaSearchLocation className='h-4 w-4 text-sand-300' />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default SearchForm;
