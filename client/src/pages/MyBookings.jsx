import React, { useState } from 'react'
import Title from '../components/Title'
import { userBookingsDummyData, assets } from '../assets/assets'

const MyBookings = () => {

    const [bookings, setBookings] = useState(userBookingsDummyData)

  return (
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>

      <Title title="My Bookings" subTitle= "Manage Booking" align="left" />

        <div className='max-w-6xl mt-8 w-full text-gray-800'>

        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
        <div className='w-1/3'> Hotels </div>
        <div className='w-1/3'> Manage Booking </div>
        </div>

        {bookings.map((bookings)=>(
            <div key={bookings._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>

                {/* The Hotel Details */}
                <div className='flex gap-4'>
                    <img src={bookings.room.images[0]} alt='hotel-img' className='md:w-44 rounded shadow object-cover' />

                    <div className='flex flex-col gap-1'>
                        <p className='font-playfair text-2xl'>{bookings.hotel.name}
                            <span className='font-inter text-sm'>({bookings.room.roomType})</span>
                        </p>

                        <div className='flex items-center gap-1 text-sm text-gray-500'>
                            <img src={assets.locationIcon} alt='location-Icon'/>
                            <span>{bookings.hotel.address}</span>
                        </div>

                        <div className='flex items-center gap-1 text-sm text-gray-500'>
                            <img src={assets.guestsIcon} alt='guest-Icon'/>
                            <span>Guests: {bookings.guests}</span>
                        </div>

                        <div className='flex items-center gap-1 text-sm text-gray-500'>
                            <img src={assets.guestsIcon} alt='guest-Icon'/>
                            <span>Booking Dates: {new Date(bookings.checkInDate).toLocaleDateString()} to {new Date(bookings.checkOutDate).toLocaleDateString()} </span>
                        </div>
                        <p className='text-base font-medium'>Total: ${bookings.totalPrice}</p>
                    </div>

                </div>

                {/* Manage Bookings */}
                <div className='flex flex-col'>
                    <button>Amend</button>
                    <button>Delete</button>
                </div>
                
            </div>
        ))}
      
      </div>

    </div> 
  )
}

export default MyBookings