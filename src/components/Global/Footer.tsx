import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-forest-800/80 px-12 py-8 text-sand-300'>
      <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {/* Section 1 */}
        <div>
          <h3 className='mb-4 text-xl font-semibold underline'>Discover</h3>
          <ul className='space-y-0'>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/countries'
              >
                Countries
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/regions'
              >
                Regions
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/cities'
              >
                Cities
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/districts'
              >
                Districts
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/airports'
              >
                Airports
              </Link>
            </li>
          </ul>
        </div>
        {/* Section 2 */}
        <div>
          <h3 className='mb-4 text-xl font-semibold underline'>
            Places to Stay
          </h3>
          <ul className='space-y-0'>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/hotels'
              >
                Hotels
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/places'
              >
                Places of Interest
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/homes'
              >
                Homes
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/apartments'
              >
                Apartments
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/resorts'
              >
                Resorts
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/villas'
              >
                Villas
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/hostels'
              >
                Hostels
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/bbs'
              >
                B&Bs
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/guest-houses'
              >
                Guest Houses
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/unique-places'
              >
                Unique Places to Stay
              </Link>
            </li>
          </ul>
        </div>
        {/* Section 3 */}
        <div>
          <h3 className='mb-4 text-xl font-semibold underline'>
            All Destinations
          </h3>
          <ul className='space-y-0'>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/all-flight-destinations'
              >
                All Flight Destinations
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/all-car-rental-locations'
              >
                All Car Rental Locations
              </Link>
            </li>
          </ul>
        </div>
        {/* Section 4 */}
        <div>
          <h3 className='mb-4 text-xl font-semibold underline'>
            Discover More
          </h3>
          <ul className='space-y-0'>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/reviews'
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/monthly-stays'
              >
                Discover Monthly Stays
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/unpacked'
              >
                Unpacked: Travel Articles
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/seasonal-deals'
              >
                Seasonal and Holiday Deals
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/traveller-awards'
              >
                Traveller Review Awards
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {/* Section 5 */}
        <div>
          <h3 className='mb-4 text-xl font-semibold underline'>Services</h3>
          <ul className='space-y-0'>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/car-rental'
              >
                Car Rental
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/flight-finder'
              >
                Flight Finder
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/restaurant-reservations'
              >
                Restaurant Reservations
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/travel-agents'
              >
                Booking.com for Travel Agents
              </Link>
            </li>
          </ul>
        </div>
        {/* Section 6 */}
        <div>
          <h3 className='mb-4 text-xl font-semibold underline'>Support</h3>
          <ul className='space-y-0'>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/covid-faqs'
              >
                Coronavirus (COVID-19) FAQs
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/about'
              >
                About Booking.com
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/customer-service'
              >
                Customer Service Help
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/partner-help'
              >
                Partner Help
              </Link>
            </li>
          </ul>
        </div>
        {/* Section 7 */}
        <div>
          <h3 className='mb-4 text-xl font-semibold underline'>Company</h3>
          <ul className='space-y-0'>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/careers'
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/sustainability'
              >
                Sustainability
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/press-center'
              >
                Press Center
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/safety-resource-center'
              >
                Safety Resource Center
              </Link>
            </li>
          </ul>
        </div>
        {/* Section 8 */}
        <div>
          <h3 className='mb-4 text-xl font-semibold underline'>Legal</h3>
          <ul className='space-y-0'>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/investor-relations'
              >
                Investor Relations
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/terms'
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/partner-dispute'
              >
                Partner Dispute
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/how-we-work'
              >
                How We Work
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/privacy'
              >
                Privacy & Cookie Statement
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/msa-statement'
              >
                MSA Statement
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/corporate-contact'
              >
                Corporate Contact
              </Link>
            </li>
            <li>
              <Link
                className='text-sm hover:text-sun-400 hover:underline'
                href='/content-guidelines'
              >
                Content Guidelines and Reporting
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
