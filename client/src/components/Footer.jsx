import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-taupe-400 text-black pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9' />
                    <p className='text-sm'>
                        Discover the world's most luxurious places to stay
                    </p>
                    <div className='flex items-center gap-17 mt-4'>
                        <img src={assets.instagramIcon} alt='instagram-Icon' className='w-6' />
                        <img src={assets.linkendinIcon} alt='linkedIn-Icon' className='w-6' />
                        <img src={assets.twitterIcon} alt='twitter-Icon' className='w-6' />
                        <img src={assets.facebookIcon} alt='facebook-Icon' className='w-6' />
                    </div>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a className='font-playfair' href="#">About</a></li>
                        <li><a className='font-playfair' href="#">Careers</a></li>
                        <li><a className='font-playfair' href="#">Press</a></li>
                        <li><a className='font-playfair' href="#">Blog</a></li>
                        <li><a className='font-playfair' href="#">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                
                        <li><a className='font-playfair' href="#">Help Center</a></li>
                        <li><a className='font-playfair' href="#">Safety Information</a></li>
                        <li><a className='font-playfair' href="#">Cancellation Options</a></li>
                        <li><a className='font-playfair' href="#">Contact Us</a></li>
                        <li><a className='font-playfair' href="#">Accessibility</a></li>
                    </ul>
                </div>

                <div className='font-playfair max-w-80'>
                    <p className=' font-playfair text-lg text-gray-800'>STAY UPDATED</p>
                    <p className='font-playfair mt-3 text-sm'>
                        Subscription to our NewsLetter
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                            <img src={assets.arrowIcon} alt="arrow-Icon" className='w-3.5 invert' />
                            
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            
            <div className='flex flex-col md:flex-row gap-2 py-5'>
                <ul className='flex items-center gap-20'>
                    <li><a className='font-playfair' href="#">Privacy</a></li>
                    <li><a className='font-playfair' href="#">Terms</a></li>
                    <li><a className='font-playfair' href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer
