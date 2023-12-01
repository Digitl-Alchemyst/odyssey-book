import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
        <footer className="bg-green-800 text-sand-300 py-8 px-12">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Section 1 */}
        <div>
          <h3 className="underline text-xl font-semibold mb-4">Discover</h3>
          <ul className="space-y-0">
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/countries">Countries</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/regions">Regions</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/cities">Cities</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/districts">Districts</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/airports">Airports</Link></li>
          </ul>
        </div>
        {/* Section 2 */}
        <div>
          <h3 className="underline text-xl font-semibold mb-4">Places to Stay</h3>
          <ul className="space-y-0">
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/hotels">Hotels</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/places">Places of Interest</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/homes">Homes</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/apartments">Apartments</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/resorts">Resorts</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/villas">Villas</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/hostels">Hostels</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/bbs">B&Bs</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/guest-houses">Guest Houses</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/unique-places">Unique Places to Stay</Link></li>
          </ul>
        </div>
        {/* Section 3 */}
        <div>
          <h3 className="underline text-xl font-semibold mb-4">All Destinations</h3>
          <ul className="space-y-0">
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/all-flight-destinations">All Flight Destinations</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/all-car-rental-locations">All Car Rental Locations</Link></li>
          </ul>
        </div>
        {/* Section 4 */}
        <div>
          <h3 className="underline text-xl font-semibold mb-4">Discover More</h3>
          <ul className="space-y-0">
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/reviews">Reviews</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/monthly-stays">Discover Monthly Stays</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/unpacked">Unpacked: Travel Articles</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/seasonal-deals">Seasonal and Holiday Deals</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/traveller-awards">Traveller Review Awards</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Section 5 */}
        <div>
          <h3 className="underline text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-0">
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/car-rental">Car Rental</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/flight-finder">Flight Finder</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/restaurant-reservations">Restaurant Reservations</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/travel-agents">Booking.com for Travel Agents</Link></li>
          </ul>
        </div>
        {/* Section 6 */}
        <div>
          <h3 className="underline text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-0">
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/covid-faqs">Coronavirus (COVID-19) FAQs</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/about">About Booking.com</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/customer-service">Customer Service Help</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/partner-help">Partner Help</Link></li>
          </ul>
        </div>
        {/* Section 7 */}
        <div>
          <h3 className="underline text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-0">
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/careers">Careers</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/sustainability">Sustainability</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/press-center">Press Center</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/safety-resource-center">Safety Resource Center</Link></li>
          </ul>
        </div>
        {/* Section 8 */}
        <div>
          <h3 className="underline text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-0">
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/investor-relations">Investor Relations</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/terms">Terms & Conditions</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/partner-dispute">Partner Dispute</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/how-we-work">How We Work</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/privacy">Privacy & Cookie Statement</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/msa-statement">MSA Statement</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/corporate-contact">Corporate Contact</Link></li>
            <li><Link className='hover:underline hover:text-sun-400 text-sm'href="/content-guidelines">Content Guidelines and Reporting</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer