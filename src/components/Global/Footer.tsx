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
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/countries'
              >
                Countries
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/regions'
              >
                Regions
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/cities'
              >
                Cities
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/districts'
              >
                Districts
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/airports'
              >
                Airports
              </p>
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
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/hotels'
              >
                Hotels
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/places'
              >
                Places of Interest
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/homes'
              >
                Homes
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/apartments'
              >
                Apartments
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/resorts'
              >
                Resorts
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/villas'
              >
                Villas
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/hostels'
              >
                Hostels
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/bbs'
              >
                B&Bs
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/guest-houses'
              >
                Guest Houses
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/unique-places'
              >
                Unique Places to Stay
              </p>
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
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/all-flight-destinations'
              >
                All Flight Destinations
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/all-car-rental-locations'
              >
                All Car Rental Locations
              </p>
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
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/reviews'
              >
                Reviews
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/monthly-stays'
              >
                Discover Monthly Stays
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/unpacked'
              >
                Unpacked: Travel Articles
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/seasonal-deals'
              >
                Seasonal and Holiday Deals
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/traveller-awards'
              >
                Traveller Review Awards
              </p>
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
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/car-rental'
              >
                Car Rental
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/flight-finder'
              >
                Flight Finder
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/restaurant-reservations'
              >
                Restaurant Reservations
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/travel-agents'
              >
                Booking.com for Travel Agents
              </p>
            </li>
          </ul>
        </div>
        {/* Section 6 */}
        <div>
          <h3 className='mb-4 text-xl font-semibold underline'>Support</h3>
          <ul className='space-y-0'>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/covid-faqs'
              >
                Coronavirus (COVID-19) FAQs
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/about'
              >
                About Booking.com
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/customer-service'
              >
                Customer Service Help
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/partner-help'
              >
                Partner Help
              </p>
            </li>
          </ul>
        </div>
        {/* Section 7 */}
        <div>
          <h3 className='mb-4 text-xl font-semibold underline'>Company</h3>
          <ul className='space-y-0'>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/careers'
              >
                Careers
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/sustainability'
              >
                Sustainability
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/press-center'
              >
                Press Center
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/safety-resource-center'
              >
                Safety Resource Center
              </p>
            </li>
          </ul>
        </div>
        {/* Section 8 */}
        <div>
          <h3 className='mb-4 text-xl font-semibold underline'>Legal</h3>
          <ul className='space-y-0'>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/investor-relations'
              >
                Investor Relations
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/terms'
              >
                Terms & Conditions
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/partner-dispute'
              >
                Partner Dispute
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/how-we-work'
              >
                How We Work
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/privacy'
              >
                Privacy & Cookie Statement
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/msa-statement'
              >
                MSA Statement
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/corporate-contact'
              >
                Corporate Contact
              </p>
            </li>
            <li>
              <p
                className='text-sm hover:text-sun-400 hover:underline'
                // href='/content-guidelines'
              >
                Content Guidelines and Reporting
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
