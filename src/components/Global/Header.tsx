/* eslint-disable @next/next/no-img-element */
'use client';

import react, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { Popover, Dialog, Disclosure, Transition } from '@headlessui/react';
import { FaChevronDown } from "react-icons/fa6";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-green-600">
      <nav
        className="mx-auto flex max-w-7xl- items-center justify-between py-3 px-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo Home Button  */}
        <div className="flex lg-flex-1">
          <Link href="/" className="p-1 flex space-x-2 items-center">
            <img className="h-12 w-auto" src="/Logo.png" alt="Logo Image" />
            <span className="text-2xl text-amber-400">Odyssey Book</span>
          </Link>
        </div>

        {/* Mobile Menu  */}
        <div className='flex lg:hidden'>
          <button type='button' className='inline-flex items-center justify-center rounded-md p-2 text-slate-200' onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Open Main Menu</span>
            <GiHamburgerMenu className='h-6 w-6' aria-hidden='true'/>
          </button>
        </div>

        {/* Popovers  */}
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-100 p-2'>
              Lodging
              <FaChevronDown className='h-5 w-5 flex-none text-slate-200' aria-hidden='true'/>
            </Popover.Button>
          </Popover>
        </Popover.Group>

      </nav>
    </header>
  );
};

export default Header;
