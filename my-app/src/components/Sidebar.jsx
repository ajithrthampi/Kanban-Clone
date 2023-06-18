import React from 'react'
import {RxDoubleArrowLeft} from 'react-icons/rx';
import {BsGrid} from 'react-icons/bs';
import {BiDotsHorizontalRounded, BiMessageAltMinus} from 'react-icons/bi';
import {BiTask} from 'react-icons/bi';
import {BsPeople} from 'react-icons/bs';
import {CiSettings} from 'react-icons/ci';
import {IoIosAddCircleOutline} from 'react-icons/io';
import { EmojiHappy } from 'iconsax-react';
import Vector from "../assets/Vector.png"


const Sidebar = () => {
    return (
        <>
            <div className='absolute bg-red-40  left-0 bottom-0 top-0 pt-6 pl-[22px] w-[240px '>
                    
                <div className='font-Inter'>
                    <div className='flex gap-12 items-center'>
                        <div className='flex gap-[33px]'>
                            <div className=''>
                                <div className='w-3 h-3 bg-[#5030E5] rounded-full absolute top-[28px] left-7 z-30'></div>
                                <div className='w-3 h-3 bg-[#917fe7] rounded-full absolute top-[35px] left-6 z-20 '></div>
                                <div className='w-3 h-3 bg-[#b9acf5] rounded-full absolute left-8 top-[35px] z-10'></div>
                            </div>
                            <h1 className='text-base font-semibold text-[#0D062D]'>Project M.</h1>
                        </div>
                        <div className='text-[#787486] text-lg '>
                            <RxDoubleArrowLeft/>
                        </div>
                    </div>
                </div>

                {/* Home section */}
                <div className='pt-[50px] flex flex-col  gap-[18px] text-[#787486] font-Inter'>
                    <div className='flex items-center  gap-[15px] '>
                        <div className='text-xl'>
                            <BsGrid/>
                        </div>
                        <h3 className='font-medium text-sm'>Home</h3>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                        <div className='text-xl'>
                            <BiMessageAltMinus/>
                        </div>
                        <h3 className='font-medium text-sm'>Messages</h3>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                        <div className='text-xl'>
                            <BiTask/>
                        </div>
                        <h3 className='font-medium text-sm'>Tasks</h3>

                    </div>
                    <div className='flex items-center gap-[15px]'>
                        <div className='text-xl'>
                            <BsPeople/>
                        </div>
                        <h3 className='font-medium text-sm'>Members</h3>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                        <div className='text-xl'>
                            <CiSettings/>
                        </div>
                        <h3 className='font-medium text-sm'>Settings</h3>
                    </div>
                    <hr className="h-px  -ml-[13px] -mr-5 bg-gray-200 border-0 dark:bg-gray-700"/>
                </div>

                {/* MY PROJECTS */}
                <div className='font-Inter flex  justify-between pt-[30px]'>
                    <h3 className='text-xs font-bold text-[#787486]'>MY PROJECTS</h3>
                    <div className='text-[#787486]'><IoIosAddCircleOutline/></div>
                </div>

                <div className='pt-4  '>
                    <div className='bg-rgba-blue py-2 -mx-2 rounded-md px-2 '>
                        <div className='flex items-center  gap-[71px] cursor-pointer  '>
                            <div className='flex items-center gap-4 p'>
                                <div className='w-2 h-2 bg-[#7AC555] rounded-full'></div>
                                <div className='text-[#0D062D] font-semibold text-sm'>Mobile App</div>
                            </div>
                            <div className='text-[#0D062D] pt-'>
                                <BiDotsHorizontalRounded/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-4  '>
                    <div className='flex items-center  justify-between  cursor-pointer  font-Inter font-medium '>
                        <div className=' flex items-center gap-4 text-sm'>
                            <div className='w-2 h-2 bg-[#FFA500] rounded-full'></div>
                            <div className='text-[#787486] font-medium text-sm'>Website Redesign</div>
                        </div>
                    </div>
                </div>

                <div className='pt-4  '>
                    <div className='flex items-center  justify-between  cursor-pointer  font-Inter font-medium '>
                        <div className=' flex items-center gap-4 text-sm'>
                            <div className='w-2 h-2 bg-[#E4CCFD] rounded-full'></div>
                            <div className='text-[#787486] font-medium text-sm'>Design System</div>
                        </div>
                    </div>
                </div>

                <div className='pt-4  '>
                    <div className='flex items-center  justify-between  cursor-pointer  font-Inter font-medium '>
                        <div className=' flex items-center gap-4 text-sm'>
                            <div className='w-2 h-2 bg-[#76A5EA] rounded-full'></div>
                            <div className='text-[#787486] font-medium text-sm'>Wireframes</div>
                        </div>
                    </div>
                </div>

                <div className='absolute right-0 left-5 bottom-0'>
                    <div className='bg-[#F5F5F5] rounded-xl gap-3 items-center  w-full h-[200px] flex flex-col  font-Inter pt-10 relative'>
                        <div className='flex flex-col items-center gap-2'>
                            <div className=' font-medium text-sm'>Thoughts Time</div>
                            <p className='font-normal text-[11px] text-[#787486] px-4 text-center'>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
                        </div>
                        <button className='bg-[#FFFFFF] rounded-md py-2 px-5 font-medium text-sm font-Inter'>Write a message</button>

                        <div className='absolute bg-[#F5F5F5]  rounded-full w-16 h-16 -top-8 bg-gradient-radial from-[#fffccc] to-gray-90000 '>
                            <img className='w-5  h-5 absolute  left-[21px]   top-[21px]' src={Vector} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            
            <hr className="h-px my-[73px] w-screen bg-gray-200 border-0 dark:bg-gray-700"/>
            

        </>
    )
}

export default Sidebar
