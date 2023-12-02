/* eslint-disable @next/next/no-img-element */
'use client';

import react, { useState, Fragment } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Popover, Dialog, Disclosure, Transition } from '@headlessui/react';
import {
  FaChevronDown,
  FaBook,
  FaMountainSun,
  FaUber,
  FaLyft,
  FaShip,
} from 'react-icons/fa6';
import { RiHotelFill } from 'react-icons/ri';
import { GiCommercialAirplane } from 'react-icons/gi';
import { IoCarSportSharp } from 'react-icons/io5';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { PiMicrophoneStage } from 'react-icons/pi';
import { IoTrainSharp } from 'react-icons/io5';
import { FaBusAlt } from 'react-icons/fa';
import { BsFillTaxiFrontFill } from 'react-icons/bs';
import { PiPark } from 'react-icons/pi';
import { SiFireship } from 'react-icons/si';
import { GiMountainClimbing } from 'react-icons/gi';
import { LuMoonStar } from 'react-icons/lu';
import { MdTravelExplore } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import { cn } from '@/util/util';
import Image from 'next/image';

const bookings = [
  {
    title: 'Book a Room',
    description: 'Find the best rates on lodging',
    link: '#',
    icon: RiHotelFill,
  },
  {
    title: 'Book a flight',
    description: 'Find the best deals on flights',
    link: '#',
    icon: GiCommercialAirplane,
  },
  {
    title: 'Rent a Car',
    description: 'Find the hottest deals car rentals',
    link: '#',
    icon: IoCarSportSharp,
  },
];

const attractions = [
  {
    title: 'Find a Concert',
    description: 'Book a live music event',
    link: '#',
    icon: PiMicrophoneStage,
  },
  {
    title: 'Explore the Outdoors',
    description: 'Find outdoor attractions',
    link: '#',
    icon: FaMountainSun,
  },
  {
    title: 'Ammusement Parks',
    description: 'Explore parks and other urban recreation',
    link: '#',
    icon: PiPark,
  },
];

const rides = [
  {
    title: 'Catch a Train',
    description: 'Book a train pass',
    link: '#',
    icon: IoTrainSharp,
  },
  {
    title: 'Find a Bus',
    description: 'Explore bus routes and pre-book a ticket',
    link: '#',
    icon: FaBusAlt,
  },
  {
    title: 'Uber',
    description: 'Pre-book a ride with Uber',
    link: '#',
    icon: FaUber,
  },
  {
    title: 'Lyft',
    description: 'Pre-book a ride with Lyft',
    link: '#',
    icon: FaLyft,
  },
  {
    title: 'Taxi',
    description: 'Pre-book a ride with a local taxi service',
    link: '#',
    icon: BsFillTaxiFrontFill,
  },
];

const vacations = [
  {
    title: 'Book a Cruise',
    description: 'Book a train pass',
    link: '#',
    icon: FaShip,
  },
  {
    title: 'Retreat',
    description: 'Explore bus routes and pre-book a ticket',
    link: '#',
    icon: SiFireship,
  },
  {
    title: 'Adventure',
    description: 'Pre-book a ride with Uber',
    link: '#',
    icon: GiMountainClimbing,
  },
  {
    title: 'Honeymoon',
    description: 'Pre-book a ride with Lyft',
    link: '#',
    icon: LuMoonStar,
  },
  {
    title: 'All Inclusive',
    description: 'Pre-book a ride with a local taxi service',
    link: '#',
    icon: MdTravelExplore,
  },
];

const CTA = [
  { title: 'See Demo Booking', link: '#', icon: FaBook },
  { title: 'Contact a Booking Agent', link: '#', icon: MdOutlineSupportAgent },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-forest-700/80'>
      <nav
        className='max-w-7xl- mx-auto flex items-center justify-between px-6 py-3 lg:justify-start lg:space-x-8 lg:px-8'
        aria-label='Global'
      >
        {/* Logo Home Button  */}
        <div className='lg-flex-1 flex'>
          <Link href='/' className='flex items-center space-x-2 p-1'>
            <Image src='/logo.png' alt='Logo Image' width={45} height={45} />
            <span className='min-w-max text-2xl text-golden-500'>
              Travel Pass
            </span>
          </Link>
        </div>

        {/* Mobile Menu  */}
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='inline-flex items-center justify-center rounded-md p-2 text-slate-200'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open Main Menu</span>
            <GiHamburgerMenu className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>

        {/* Popovers  */}
        <Popover.Group className='hidden w-full justify-center lg:flex lg:gap-x-12'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 p-2 text-sm font-semibold leading-6 text-sand-200'>
              Travel Bookings
              <FaChevronDown
                className='h-5 w-5 flex-none text-sand-300'
                aria-hidden='true'
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-42 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-sand-200 p-3 shadow-lg shadow-fire-700/60 ring-1 ring-golden-400/70'>
                <div>
                  {bookings.map((item) => (
                    <div
                      key={item.title}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:border hover:border-fire-500/70 hover:bg-sun-300/60 hover:shadow-md'
                    >
                      <item.icon
                        aria-hidden='true'
                        className='h-6 w-6 text-sun-700'
                      />
                      <div className='flex-auto'>
                        <a
                          className='block font-semibold text-sun-500'
                          href={item.link}
                        >
                          {item.title}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-sun-800'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex divide-x divide-slate-800 rounded-lg bg-sand-400 px-1 py-2'>
                  {CTA.map((item) => (
                    <a
                      href={item.link}
                      key={item.title}
                      className='mr-2 font-semibold leading-6'
                    >
                      <div className='mx-1 flex w-full items-center justify-center gap-x-2 rounded-md p-3 hover:border hover:border-sun-500/70 hover:bg-fire-400/60 hover:shadow-md'>
                        <item.icon
                          className='h5-w-6 flex-none text-fire-700'
                          aria-hidden='true'
                        />
                        <p className='text-sm'>{item.title}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 p-2 text-sm font-semibold leading-6 text-sand-200'>
              Vacation Packages
              <FaChevronDown
                className='h-5 w-5 flex-none text-sand-300'
                aria-hidden='true'
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-42 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-sand-200 p-3 shadow-lg shadow-fire-700/60 ring-1 ring-golden-400/70'>
                <div>
                  {vacations.map((item) => (
                    <div
                      key={item.title}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:border hover:border-fire-500/70 hover:bg-sun-300/60 hover:shadow-md'
                    >
                      <item.icon
                        aria-hidden='true'
                        className='h-6 w-6 text-sun-700'
                      />
                      <div className='flex-auto'>
                        <a
                          className='block font-semibold text-sun-500'
                          href={item.link}
                        >
                          {item.title}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-sun-800'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex divide-x divide-slate-800 rounded-lg bg-sand-400 px-1 py-2'>
                  {CTA.map((item) => (
                    <a
                      href={item.link}
                      key={item.title}
                      className='mr-2 font-semibold leading-6'
                    >
                      <div className='mx-1 flex w-full items-center justify-center gap-x-2 rounded-md p-3 hover:border hover:border-sun-500/70 hover:bg-fire-400/60 hover:shadow-md'>
                        <item.icon
                          className='h5-w-6 flex-none text-fire-700'
                          aria-hidden='true'
                        />
                        <p className='text-sm'>{item.title}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 p-2 text-sm font-semibold leading-6 text-sand-200'>
              Attractions
              <FaChevronDown
                className='h-5 w-5 flex-none text-sand-300'
                aria-hidden='true'
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-42 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-sand-200 p-3 shadow-lg shadow-fire-700/60 ring-1 ring-golden-400/70'>
                <div>
                  {attractions.map((item) => (
                    <div
                      key={item.title}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:border hover:border-fire-500/70 hover:bg-sun-300/60 hover:shadow-md'
                    >
                      <item.icon
                        aria-hidden='true'
                        className='h-6 w-6 text-sun-700'
                      />
                      <div className='flex-auto'>
                        <a
                          className='block font-semibold text-sun-500'
                          href={item.link}
                        >
                          {item.title}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-sun-800'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex divide-x divide-slate-800 rounded-lg bg-sand-400 px-1 py-2'>
                  {CTA.map((item) => (
                    <a
                      href={item.link}
                      key={item.title}
                      className='mr-2 font-semibold leading-6'
                    >
                      <div className='mx-1 flex w-full items-center justify-center gap-x-2 rounded-md p-3 hover:border hover:border-sun-500/70 hover:bg-fire-400/60 hover:shadow-md'>
                        <item.icon
                          className='h5-w-6 flex-none text-fire-700'
                          aria-hidden='true'
                        />
                        <p className='text-sm'>{item.title}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 p-2 text-sm font-semibold leading-6 text-sand-200'>
              Get a Ride
              <FaChevronDown
                className='h-5 w-5 flex-none text-sand-300'
                aria-hidden='true'
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-42 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-sand-200 p-3 shadow-lg shadow-fire-700/60 ring-1 ring-golden-400/70'>
                <div>
                  {rides.map((item) => (
                    <div
                      key={item.title}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:border hover:border-fire-500/70 hover:bg-sun-300/60 hover:shadow-md'
                    >
                      <item.icon
                        aria-hidden='true'
                        className='h-6 w-6 text-sun-700'
                      />
                      <div className='flex-auto'>
                        <a
                          className='block font-semibold text-sun-500'
                          href={item.link}
                        >
                          {item.title}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-sun-800'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex divide-x divide-slate-800 rounded-lg bg-sand-400 px-1 py-2'>
                  {CTA.map((item) => (
                    <a
                      href={item.link}
                      key={item.title}
                      className='mr-2 font-semibold leading-6'
                    >
                      <div className='mx-1 flex w-full items-center justify-center gap-x-2 rounded-md p-3 hover:border hover:border-sun-500/70 hover:bg-fire-400/60 hover:shadow-md'>
                        <item.icon
                          className='h5-w-6 flex-none text-fire-700'
                          aria-hidden='true'
                        />
                        <p className='text-sm'>{item.title}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>

        {/* Account  */}
        <div className='hidden space-x-4 lg:flex lg:flex-1 lg:justify-end'>
          <a
            href='#'
            className='w-full min-w-max text-sm font-semibold leading-6 text-sand-200'
          >
            Travel Pass+
          </a>
          <a href='#' className='text-sm font-semibold leading-6 text-sand-200'>
            Login
            <span aria-hidden='true' className='ml-2'>
              &rarr;
            </span>
          </a>
        </div>
      </nav>

      {/* Mobile Nav Menu  */}
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10 h-full' />
        <Dialog.Panel className=' fixed inset-y-0 right-0 z-10 flex h-full w-full flex-col items-stretch overflow-y-auto bg-forest-800 px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-slate-800/40'>
          {/* Logo  */}
          <div className='flex items-center justify-between'>
            <a className='-m-1.5 flex items-center space-x-2 p-1.5'>
              <img className='h-12 w-auto' src='/Logo.png' alt='Logo Image' />
              <span className='min-w-max text-2xl text-golden-500'>
                Travel Pass
              </span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              type='button'
              className='m-2 rounded-md text-sand-200'
            >
              <GrClose className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>

          {/* Nav Menu  */}
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-sand-900'>
              <div className='flex h-full flex-col items-stretch space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open, close }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-sand-300 hover:text-fire-600'>
                        Travel Bookings
                        <FaChevronDown
                          className={cn(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      {[...bookings, ...CTA].map((item) => (
                        <Disclosure.Panel
                          as='a'
                          key={item.title}
                          href={item.link}
                          className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-sand-200 hover:text-sun-400'
                        >
                          {item.title}
                        </Disclosure.Panel>
                      ))}
                    </>
                  )}
                </Disclosure>
                <Disclosure as='div' className='-mx-3'>
                  {({ open, close }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-sand-300 hover:text-fire-600'>
                        Vacation Packages
                        <FaChevronDown
                          className={cn(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      {[...vacations, ...CTA].map((item) => (
                        <Disclosure.Panel
                          as='a'
                          key={item.title}
                          href={item.link}
                          className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-sand-200 hover:text-sun-400'
                        >
                          {item.title}
                        </Disclosure.Panel>
                      ))}
                    </>
                  )}
                </Disclosure>
                <Disclosure as='div' className='-mx-3'>
                  {({ open, close }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-sand-300 hover:text-fire-600'>
                        Attractions
                        <FaChevronDown
                          className={cn(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      {[...attractions].map((item) => (
                        <Disclosure.Panel
                          as='a'
                          key={item.title}
                          href={item.link}
                          className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-sand-200 hover:text-sun-400'
                        >
                          {item.title}
                        </Disclosure.Panel>
                      ))}
                    </>
                  )}
                </Disclosure>
                <Disclosure as='div' className='-mx-3'>
                  {({ open, close }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-sand-300 hover:text-fire-600'>
                        Book a Ride
                        <FaChevronDown
                          className={cn(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      {[...rides, ...CTA].map((item) => (
                        <Disclosure.Panel
                          as='a'
                          key={item.title}
                          href={item.link}
                          className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-sand-200 hover:text-sun-400'
                        >
                          {item.title}
                        </Disclosure.Panel>
                      ))}
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>

          {/* Account  */}
          <div className='mt-auto flex flex-col space-y-4 lg:hidden'>
            <a
              href='#'
              className='w-full min-w-max text-sm font-semibold leading-6 text-sand-200 hover:text-fire-400'
            >
              Travel Pass+
            </a>
            <a
              href='#'
              className='w-full min-w-max text-sm font-semibold leading-6 text-sand-200 hover:text-fire-400'
            >
              Login
              <span aria-hidden='true' className='ml-2'>
                &rarr;
              </span>
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
