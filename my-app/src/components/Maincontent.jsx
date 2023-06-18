import React from 'react'
import Navbar from './Navbar'
import Subcontent from './Subcontent'
import Appcontent from './Appcontent'

const Maincontent = () => {
    return (
        <div className='mx-12  h-screen relative'>
            <div>
                <Navbar/>
            </div>
            <div>
                <Subcontent/>
            </div>
            <div className=' '>
                <Appcontent/>
            </div>
        </div>
    )
}

export default Maincontent
