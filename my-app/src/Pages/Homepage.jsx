import React from 'react'
import Sidebar from '../components/Sidebar'
import Maincontent from '../components/Maincontent'

const Homepage = () => {
    return (
        <div className='grid grid-cols-6 md:h-screen'>
            <div className='col-span-1 bg-re-400'>
                <Sidebar/>
            </div>

            <div className='col-span-5 bg-yelow-300'>
                <div className="absolute  -ml-0.5 w-0.5 h-screen bg-gray-600 opacity-20 hidden md:block"></div>
                <Maincontent/>
            </div>
        </div>
    )
}

export default Homepage
