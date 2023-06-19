import React from 'react'
import Sidebar from '../components/Sidebar'
import Maincontent from '../components/Maincontent'

const Homepage = () => {
    return(
        // <div className='grid grid-cols-6 md:h-screen '>
        //     <div className=' relative col-span-1 '>
        //         <Sidebar/>
        //     </div>

        //     <div className='  col-span-5 '>
        //         <Maincontent/>
        //     </div>
        // </div> 
        <div className='flex  md:h-scree '>
            <div className=' '>
                <div className='overflow-y-scroll '>
                    <Sidebar/>
                </div>
             
            </div>

            <div className=' relativ bg-red-400'>
                <Maincontent/>
            </div>
        </div>
    )
}

export default Homepage
