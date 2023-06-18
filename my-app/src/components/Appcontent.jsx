import React from 'react'
import {BiDotsHorizontalRounded, BiMessageAltDots} from 'react-icons/bi'
import {BsFiles} from 'react-icons/bs'
import {HiOutlinePlus} from 'react-icons/hi'
import Leaf from "../assets/Leaf.png"
import Moodboard2 from "../assets/Moodboard2.png"
import Moodboard1 from "../assets/Moodboard1.png"
import MobileDesign from "../assets/MobileDesign.png"

const Appcontent = () => {
    return (
        <div className='pt-8'>
            <div className='grid grid-cols-3 absolute right-0 left-0 bottom-0 top-[36vh] gap-4'>


                {/* TODO */}

                <div className='bg-[#F5F5F5]  rounded-t-lg  pt-5 px-6  relative'>
                    <div className='flex items-center justify-between gap-3'>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-[#5030E5] rounded w-2 h-2'></div>
                            <h4 className='font-Inter font-medium text-base'>To Do</h4>
                            <div className='rounded-full bg-[#E0E0E0] flex w-5 h-5 text-xs items-center font-Inter  justify-center text-[#625F6D]'>4</div>
                        </div>
                        <div>
                            <div className='bg-[#dcd6fa] w-5 font-Inter  h-5 rounded-md flex justify-center text-[12px] items-center text-[#5030E5]'>
                                <HiOutlinePlus/>
                            </div>
                        </div>
                    </div>
                    <hr className="h-[2px] my-4  bg-[#5030E5] border-0 dark:bg-gray-700"/> {/* CARD */}
                    <div className='flex flex-col gap-5  overflow-y-scroll scrollbar-hide absolute bottom-0 top-[90px] right-5 left-5 mb-0.5'>
                        <div className='  bg-[#FFFFFF] w-full h-full rounded-xl p-3 px-5 pb-6 '>
                            <div className='flex items-center justify-between pt-2 relatve'>
                                <h3 className='font-Inter bg-[#f9eee3] text-xs rounded-[4px] py-1 px-1.5 text-[#D58D49]'>Low</h3>
                                <div className='text-xl'>
                                    <BiDotsHorizontalRounded/>
                                </div>
                            </div>
                            <h1 className='font-Inter font-semibold text-lg pt-1'>Brainstorming</h1>
                            <p className=' font-Inter font-normal text-xs text-[#787486] pt-1'>Brainstorming brings team members' diverse experience into play.
                            </p>

                            {/*Image section last  */}
                            <div className='flex items-center justify-between pt-8 relative'>
                                <div>
                                    <img className=' w-7 h-7 rounded-full object-cover border-2 border-white absolute z-40 top-7 ' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                    <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-30 top-7 left-5 ' src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                    <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-20 top-7  left-10' src="https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                </div>
                                <div className='font-Inter flex items-center gap-3 '>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486] text-lg'>
                                            <BiMessageAltDots/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>12 comments</h4>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486]'>
                                            <BsFiles/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>0 files</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TODO 2 */}

                        <div className='  bg-[#FFFFFF] w-full h-full rounded-xl p-3 px-5 pb-6'>
                            <div className='flex items-center justify-between pt-2 relatve'>
                                <h3 className='font-Inter bg-[#fcf1f2] text-xs rounded-[4px] py-1 px-1.5 text-[#da7b85]'>High</h3>
                                <div className='text-xl'>
                                    <BiDotsHorizontalRounded/>
                                </div>
                            </div>
                            <h1 className='font-Inter font-semibold text-lg pt-1'>Research</h1>
                            <p className=' font-Inter font-normal text-xs text-[#787486] pt-1'>User research helps you to create an optimal product for users.
                            </p>

                            {/*Image section last  */}
                            <div className='flex items-center justify-between pt-8 relative'>
                                <div>
                                    <img className=' w-7 h-7 rounded-full object-cover border-2 border-white absolute z-40 top-7 ' src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                    <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-30 top-7 left-5 ' src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                </div>
                                <div className='font-Inter flex items-center gap-3 '>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486] text-lg'>
                                            <BiMessageAltDots/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>10 comments</h4>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486]'>
                                            <BsFiles/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>3 files</h4>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='  bg-[#FFFFFF] w-full h-full rounded-xl p-3 px-5 pb-6'>
                            <div className='flex items-center justify-between pt-2 relatve'>
                                <h3 className='font-Inter bg-[#fcf1f2] text-xs rounded-[4px] py-1 px-1.5 text-[#da7b85]'>High</h3>
                                <div className='text-xl'>
                                    <BiDotsHorizontalRounded/>
                                </div>
                            </div>
                            <h1 className='font-Inter font-semibold text-lg pt-1'>Wireframes</h1>
                            <p className=' font-Inter font-normal text-xs text-[#787486] pt-1'>Low fidelity wireframes include the most basic content and visuals.
                            </p>

                            {/*Image section last  */}
                            <div className='flex items-center justify-between pt-8 relative'>
                                <div>
                                    <img className=' w-7 h-7 rounded-full object-cover border-2 border-white absolute z-40 top-7 ' src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                    <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-30 top-7 left-5 ' src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                    <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-20 top-7  left-10' src="https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                </div>
                                <div className='font-Inter flex items-center gap-3 '>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486] text-lg'>
                                            <BiMessageAltDots/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>10 comments</h4>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486]'>
                                            <BsFiles/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>3 files</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* ON PROGRESS */}
                <div className='bg-[#F5F5F5]  rounded-t-lg  pt-5 px-6  relative '>
                    <div className='flex items-center justify-between gap-3'>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-[#FFA500] rounded w-2 h-2'></div>
                            <h4 className='font-Inter font-medium text-base'>On Progress</h4>
                            <div className='rounded-full bg-[#E0E0E0] flex w-5 h-5 text-xs items-center font-Inter  justify-center text-[#625F6D]'>3</div>
                        </div>

                    </div>
                    <hr className="h-[2px] my-4  bg-[#FFA500]  border-0 dark:bg-gray-700"/>

                    <div className='flex flex-col gap-5  overflow-y-scroll scrollbar-hide absolute bottom-0 top-[90px] right-5 left-5 mb-0.5'>
                        <div className='  bg-[#FFFFFF] w-full h-full rounded-xl p-3 px-5 pb-6'>
                            <div className='flex items-center justify-between pt-2 relatve'>
                                <h3 className='font-Inter bg-[#f9eee3] text-xs rounded-[4px] py-1 px-1.5 text-[#D58D49]'>Low</h3>
                                <div className='text-xl'>
                                    <BiDotsHorizontalRounded/>
                                </div>
                            </div>
                            <h1 className='font-Inter font-semibold text-lg pt-1'>Onboarding Illustrations
                            </h1>
                            <img className='object-cover'
                                src={Leaf}
                                alt=""/> {/*Image section last  */}
                            <div className='flex items-center justify-between pt-8 relative'>
                                <div>
                                    <img className=' w-7 h-7 rounded-full object-cover border-2 border-white absolute z-40 top-7 ' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                    <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-30 top-7 left-5 ' src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                    <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-20 top-7  left-10' src="https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                </div>
                                <div className='font-Inter flex items-center gap-3 '>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486] text-lg'>
                                            <BiMessageAltDots/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>14 comments</h4>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486]'>
                                            <BsFiles/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>15 files</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='  bg-[#FFFFFF] w-full h-full rounded-xl p-3 px-5 pb-6'>
                            <div className='flex items-center justify-between pt-2 relatve'>
                                <h3 className='font-Inter bg-[#f9eee3] text-xs rounded-[4px] py-1 px-1.5 text-[#D58D49]'>Low</h3>
                                <div className='text-xl'>
                                    <BiDotsHorizontalRounded/>
                                </div>
                            </div>
                            <h1 className='font-Inter font-semibold text-lg pt-1'>Moodboard</h1>
                            <div className='flex items-center justify-cente gap-3 pt-1'>
                                <img className='object-cover w-full h-full'
                                    src={Moodboard1}
                                    alt=""/>
                                <img className='object-cover w-full h-full'
                                    src={Moodboard2}
                                    alt=""/>
                            </div>


                            {/*Image section last  */}
                            <div className='flex items-center justify-between pt-8 relative'>
                                <div>
                                    <img className=' w-7 h-7 rounded-full object-cover border-2 border-white absolute z-40 top-7 ' src="https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>

                                </div>
                                <div className='font-Inter flex items-center gap-3 '>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486] text-lg'>
                                            <BiMessageAltDots/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>9 comments</h4>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486]'>
                                            <BsFiles/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>10 files</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* DONE */}
                <div className='bg-[#F5F5F5]  rounded-t-lg  pt-5 px-6  relative '>
                    <div className='flex items-center justify-between gap-3'>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-[#8BC48A] rounded w-2 h-2'></div>
                            <h4 className='font-Inter font-medium text-base'>Done</h4>
                            <div className='rounded-full bg-[#E0E0E0] flex w-5 h-5 text-xs items-center font-Inter  justify-center text-[#625F6D]'>2</div>
                        </div>

                    </div>
                    <hr className="h-[2px] my-4  bg-[#8BC48A] border-0 dark:bg-gray-700"/>

                    <div className='flex flex-col gap-5  overflow-y-scroll scrollbar-hide absolute bottom-0 top-[90px] right-5 left-5 mb-0.5'>
                        <div className='  bg-[#FFFFFF] w-full h-full rounded-xl p-3 px-5 pb-6'>
                            <div className='flex items-center justify-between pt-2 relatve'>
                                <h3 className='font-Inter bg-[#e6f3eb] text-xs rounded-[4px] py-1 px-1.5 text-[#82bf81]'>Completed</h3>
                                <div className='text-xl'>
                                    <BiDotsHorizontalRounded/>
                                </div>
                            </div>
                            <h1 className='font-Inter font-semibold text-lg pt-1'>Mobile App Design
                            </h1>
                            <img className='object-cover w-full'
                                src={MobileDesign}
                                alt=""/> {/*Image section last  */}
                            <div className='flex items-center justify-between pt-8 relative'>
                                <div>
                                    <img className=' w-7 h-7 rounded-full object-cover border-2 border-white absolute z-40 top-7 ' src="https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                    <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-30 top-7 left-5 ' src="https://images.pexels.com/photos/4429279/pexels-photo-4429279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                    
                                </div>
                                <div className='font-Inter flex items-center gap-3 '>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486] text-lg'>
                                            <BiMessageAltDots/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>12 comments</h4>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486]'>
                                            <BsFiles/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>15 files</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='  bg-[#FFFFFF] w-full h-full rounded-xl p-3 px-5 pb-6'>
                            <div className='flex items-center justify-between pt-2 relatve'>
                                <h3 className='font-Inter bg-[#e6f3eb] text-xs rounded-[4px] py-1 px-1.5 text-[#82bf81]'>Completed</h3>
                                <div className='text-xl'>
                                    <BiDotsHorizontalRounded/>
                                </div>
                            </div>
                            <h1 className='font-Inter font-semibold text-lg pt-1'>Design System</h1>
                            <p className=' font-Inter font-normal text-xs text-[#787486] pt-1'>It just needs to adapt the UI from what you did before
                            </p>


                            {/*Image section last  */}
                            <div className='flex items-center justify-between pt-8 relative'>
                                <div>
                                    <img className=' w-7 h-7 rounded-full object-cover border-2 border-white absolute z-40 top-7 ' src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                    <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-30 top-7 left-5 ' src="https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                    <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-20 top-7  left-10' src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                </div>
                                <div className='font-Inter flex items-center gap-3 '>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486] text-lg'>
                                            <BiMessageAltDots/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>14 comments</h4>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486]'>
                                            <BsFiles/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>15 files</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Appcontent
