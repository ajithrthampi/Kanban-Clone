import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {BsCalendar4Week} from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'


const Navbar = () => {
    return (
        <div>
            <div className='pt-3 relative flex justify-between item  '>
                <div className='absolute top-[26px] left-6 text-xl'>
                    <CiSearch/>
                </div>
                <input className='bg-[#F5F5F5] font-Inter font-normal text-sm  px-10 pr-32 placeholder:pl-5  rounded-md placeholder:text-[#787486]' type="text" placeholder='Search for anything...'/>

                <div className='flex items-center gap-12'>
                    <div className='flex  items-center gap-7 text-[#787486]'>
                        <div><BsCalendar4Week/></div>
                        <div className='text-xl text-[#787486]'><BiMessageDetail/></div>
                        <div className='text-2xl relative'>
                            <div className='rounded-ful bg-[#D8727D] absolute w-1 h-1 rounded right-[6px] top-[3px]'></div>
                            <IoIosNotificationsOutline/>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='font-Inter text-right'>
                            <h3 className='font-normal text-[#0D062D] text-base'>Anima Agrawal</h3>
                            <p className='text-[#787486] text-sm'>U.P, India</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                            <div className='text-[#292D32]'>
                                <IoIosArrowDown size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
