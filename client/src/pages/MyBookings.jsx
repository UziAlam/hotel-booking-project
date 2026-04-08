import { useEffect, useState } from 'react'
import Title from '../components/Title'
import { assets, roomsDummyData, hotelDummyData } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import axios from 'axios'

const MyBookings = () => {
    const { token, BASE_URL } = useAppContext()
    const [bookings, setBookings] = useState([])
    const [editingId, setEditingId] = useState(null)
    const [editDates, setEditDates] = useState({ checkInDate: '', checkOutDate: '' })

    const fetchBookings = async () => {
        const { data } = await axios.get(`${BASE_URL}/api/bookings`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        if (data.success) setBookings(data.bookings)
    }

    useEffect(() => {
        if (token) fetchBookings()
    }, [token])

    const handleDelete = async (id) => {
        const { data } = await axios.delete(`${BASE_URL}/api/bookings/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        if (data.success) setBookings(bookings.filter(b => b._id !== id))
    }

    const handleAmendClick = (booking) => {
        setEditingId(booking._id)
        setEditDates({
            checkInDate: booking.checkInDate.split('T')[0],
            checkOutDate: booking.checkOutDate.split('T')[0],
        })
    }

    const handleUpdate = async (id) => {
        const { data } = await axios.put(`${BASE_URL}/api/bookings/${id}`, editDates, {
            headers: { Authorization: `Bearer ${token}` }
        })
        if (data.success) {
            setEditingId(null)
            fetchBookings()
        }
    }

    return (
        <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
            <Title title="My Bookings" subTitle="Manage Booking" align="left" />

            <div className='max-w-6xl mt-8 w-full text-gray-800'>
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                    <div>Hotels</div>
                    <div>Manage Booking</div>
                </div>

                {bookings.length === 0 && (
                    <p className='text-gray-500 mt-8'>No bookings found.</p>
                )}

                {bookings.map((booking) => {
                    const room = roomsDummyData.find(r => r._id === booking.room)
                    const hotel = hotelDummyData.find(h => h._id === booking.hotel)
                    return (
                    <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>

                        {/* Hotel Details */}
                        <div className='flex gap-4'>
                            <img src={room?.images?.[0]} alt='hotel-img' className='md:w-44 rounded shadow object-cover' />
                            <div className='flex flex-col gap-1'>
                                <p className='font-playfair text-2xl'>
                                    {hotel?.name}
                                    <span className='font-inter text-sm'> ({room?.roomType})</span>
                                </p>
                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                    <img src={assets.locationIcon} alt='location-Icon' />
                                    <span>{hotel?.address}</span>
                                </div>
                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                    <img src={assets.guestsIcon} alt='guest-Icon' />
                                    <span>Guests: {booking.guests}</span>
                                </div>

                                {/* Show inline edit or static dates */}
                                {editingId === booking._id ? (
                                    <div className='flex flex-col gap-2 mt-2'>
                                        <div className='flex items-center gap-2 text-sm'>
                                            <label className='font-medium'>Check-In:</label>
                                            <input
                                                type='date'
                                                value={editDates.checkInDate}
                                                onChange={e => setEditDates({ ...editDates, checkInDate: e.target.value })}
                                                className='border border-gray-300 rounded px-2 py-1 outline-none'
                                            />
                                        </div>
                                        <div className='flex items-center gap-2 text-sm'>
                                            <label className='font-medium'>Check-Out:</label>
                                            <input
                                                type='date'
                                                value={editDates.checkOutDate}
                                                onChange={e => setEditDates({ ...editDates, checkOutDate: e.target.value })}
                                                className='border border-gray-300 rounded px-2 py-1 outline-none'
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className='flex items-center gap-1 text-sm text-gray-500'>
                                        <img src={assets.calenderIcon} alt='calendar-Icon' />
                                        <span>
                                            {new Date(booking.checkInDate).toLocaleDateString()} to {new Date(booking.checkOutDate).toLocaleDateString()}
                                        </span>
                                    </div>
                                )}

                                <p className='text-base font-medium'>Total: ${booking.totalPrice}</p>
                            </div>
                        </div>

                        {/* Manage Buttons */}
                        <div className='flex flex-col gap-2 justify-center mt-4 md:mt-0'>
                            {editingId === booking._id ? (
                                <>
                                    <button
                                        onClick={() => handleUpdate(booking._id)}
                                        className='px-4 py-1.5 text-sm bg-black text-white rounded-full hover:bg-gray-800 transition'
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditingId(null)}
                                        className='px-4 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition'
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => handleAmendClick(booking)}
                                        className='px-4 py-1.5 text-sm border border-gray-800 rounded-full hover:bg-gray-100 transition'
                                    >
                                        Amend
                                    </button>
                                    <button
                                        onClick={() => handleDelete(booking._id)}
                                        className='px-4 py-1.5 text-sm border border-red-400 text-red-500 rounded-full hover:bg-red-50 transition'
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>

                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyBookings
