import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Great Stack",
    "email": "user.greatstack@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

// Hotel Dummy Data
export const hotelDummyData = [
    {
        "_id": "67f76393197ac559e4089b72",
        "name": "Urbanza Suites",
        "address": "Main Road 123 Street, 23 Colony",
        "contact": "+0123456789",
        "owner": userDummyData,
        "city": "New York",
        "createdAt": "2025-04-10T06:22:11.663Z",
        "updatedAt": "2025-04-10T06:22:11.663Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b73",
        "name": "The Grand Meridian",
        "address": "45 Park Avenue, Midtown",
        "contact": "+12125550101",
        "owner": userDummyData,
        "city": "New York",
        "createdAt": "2025-03-15T09:10:00.000Z",
        "updatedAt": "2025-03-15T09:10:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b74",
        "name": "Azure Bay Resort",
        "address": "Ocean Drive 88, Beachfront Strip",
        "contact": "+13055550192",
        "owner": userDummyData,
        "city": "Miami",
        "createdAt": "2025-02-20T14:30:00.000Z",
        "updatedAt": "2025-02-20T14:30:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b75",
        "name": "The Willowbrook Inn",
        "address": "22 Maple Street, Old Town",
        "contact": "+17085550134",
        "owner": userDummyData,
        "city": "Chicago",
        "createdAt": "2025-01-05T08:00:00.000Z",
        "updatedAt": "2025-01-05T08:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b76",
        "name": "Pinnacle Heights Hotel",
        "address": "Tower Lane 9, Financial District",
        "contact": "+14155550178",
        "owner": userDummyData,
        "city": "San Francisco",
        "createdAt": "2025-03-28T11:45:00.000Z",
        "updatedAt": "2025-03-28T11:45:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b77",
        "name": "Sunset Palms Boutique",
        "address": "Sunset Boulevard 310, West Hollywood",
        "contact": "+13235550155",
        "owner": userDummyData,
        "city": "Los Angeles",
        "createdAt": "2025-04-01T07:20:00.000Z",
        "updatedAt": "2025-04-01T07:20:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b78",
        "name": "Harborview Grand",
        "address": "Pier 7, Waterfront Promenade",
        "contact": "+12065550122",
        "owner": userDummyData,
        "city": "Seattle",
        "createdAt": "2025-02-14T16:00:00.000Z",
        "updatedAt": "2025-02-14T16:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b79",
        "name": "The Copley Residences",
        "address": "200 Boylston Street, Back Bay",
        "contact": "+16175550188",
        "owner": userDummyData,
        "city": "Boston",
        "createdAt": "2025-01-22T10:15:00.000Z",
        "updatedAt": "2025-01-22T10:15:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b80",
        "name": "Desert Rose Suites",
        "address": "Las Vegas Blvd 3500, The Strip",
        "contact": "+17025550144",
        "owner": userDummyData,
        "city": "Las Vegas",
        "createdAt": "2025-03-10T19:00:00.000Z",
        "updatedAt": "2025-03-10T19:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b81",
        "name": "Capitol View Lodge",
        "address": "14th Street NW 600, Penn Quarter",
        "contact": "+12025550199",
        "owner": userDummyData,
        "city": "Washington DC",
        "createdAt": "2025-04-05T12:30:00.000Z",
        "updatedAt": "2025-04-05T12:30:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b82",
        "name": "The Ashford Manor",
        "address": "Royal Crescent 5, Garden District",
        "contact": "+15045550161",
        "owner": userDummyData,
        "city": "New Orleans",
        "createdAt": "2025-01-18T13:00:00.000Z",
        "updatedAt": "2025-01-18T13:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b83",
        "name": "Ironwood & Co. Hotel",
        "address": "Commerce Street 77, Uptown",
        "contact": "+16155550173",
        "owner": userDummyData,
        "city": "Nashville",
        "createdAt": "2025-02-03T09:45:00.000Z",
        "updatedAt": "2025-02-03T09:45:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b84",
        "name": "Lakeshore Retreat",
        "address": "Michigan Avenue 1200, Lakefront",
        "contact": "+13125550185",
        "owner": userDummyData,
        "city": "Chicago",
        "createdAt": "2025-03-07T08:30:00.000Z",
        "updatedAt": "2025-03-07T08:30:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b85",
        "name": "The Peachtree Grand",
        "address": "Peachtree Street NE 400, Midtown",
        "contact": "+14045550117",
        "owner": userDummyData,
        "city": "Atlanta",
        "createdAt": "2025-01-30T15:20:00.000Z",
        "updatedAt": "2025-01-30T15:20:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b86",
        "name": "Rocky Summit Lodge",
        "address": "Canyon Road 55, Highlands Park",
        "contact": "+17205550139",
        "owner": userDummyData,
        "city": "Denver",
        "createdAt": "2025-04-02T10:00:00.000Z",
        "updatedAt": "2025-04-02T10:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b87",
        "name": "Magnolia House Hotel",
        "address": "South Congress Ave 220, SoCo",
        "contact": "+15125550146",
        "owner": userDummyData,
        "city": "Austin",
        "createdAt": "2025-02-25T17:00:00.000Z",
        "updatedAt": "2025-02-25T17:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b88",
        "name": "The Pearl Quarter Inn",
        "address": "Riverwalk Plaza 14, Pearl District",
        "contact": "+15035550158",
        "owner": userDummyData,
        "city": "Portland",
        "createdAt": "2025-03-19T11:10:00.000Z",
        "updatedAt": "2025-03-19T11:10:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b89",
        "name": "Saguaro Sands Resort",
        "address": "Camelback Road 700, Paradise Valley",
        "contact": "+16025550163",
        "owner": userDummyData,
        "city": "Phoenix",
        "createdAt": "2025-01-12T08:50:00.000Z",
        "updatedAt": "2025-01-12T08:50:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b90",
        "name": "Bayou Belle Suites",
        "address": "Magazine Street 902, Garden District",
        "contact": "+15045550177",
        "owner": userDummyData,
        "city": "New Orleans",
        "createdAt": "2025-04-07T14:00:00.000Z",
        "updatedAt": "2025-04-07T14:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "67f76393197ac559e4089b91",
        "name": "The Northstar Lodge",
        "address": "Nicollet Mall 333, Downtown",
        "contact": "+16125550191",
        "owner": userDummyData,
        "city": "Minneapolis",
        "createdAt": "2025-03-01T09:00:00.000Z",
        "updatedAt": "2025-03-01T09:00:00.000Z",
        "__v": 0
    }
]

const roomTemplates = [
    {
        roomType: "Luxury Room",
        pricePerNight: 399,
        amenities: ["Room Service", "Mountain View", "Pool Access"],
        images: [roomImg1, roomImg2, roomImg3, roomImg4],
    },
    {
        roomType: "Double Bed",
        pricePerNight: 299,
        amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
        images: [roomImg2, roomImg3, roomImg4, roomImg1],
    },
    {
        roomType: "Single Bed",
        pricePerNight: 199,
        amenities: ["Free WiFi", "Room Service", "Pool Access"],
        images: [roomImg4, roomImg1, roomImg2, roomImg3],
    },
]

// Rooms Dummy Data
export const roomsDummyData = hotelDummyData.flatMap((hotel, hotelIndex) =>
    roomTemplates.map((template, roomIndex) => ({
        "_id": `room_${hotel._id}_${roomIndex + 1}`,
        "hotel": hotel,
        "roomType": template.roomType,
        "pricePerNight": template.pricePerNight + hotelIndex * 15,
        "amenities": template.amenities,
        "images": template.images,
        "isAvailable": (hotelIndex + roomIndex) % 4 !== 0,
        "createdAt": hotel.createdAt,
        "updatedAt": hotel.updatedAt,
        "__v": 0
    }))
)



// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData[0],
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": roomsDummyData[1].pricePerNight,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData[0],
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": roomsDummyData[0].pricePerNight,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[2],
        "hotel": hotelDummyData[0],
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": roomsDummyData[2].pricePerNight,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": userBookingsDummyData.reduce((total, booking) => total + booking.totalPrice, 0),
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/
