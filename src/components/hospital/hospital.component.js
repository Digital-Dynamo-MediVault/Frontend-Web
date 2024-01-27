import React from 'react'
import Sidebar from '../common/Sidebar'
import Header from '../common/Header'


function Hospital() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className="flex flex-col w-[90vw]">
                <Header />
                <div className='flex flex-col p-4 w-[80vw]'>
                    <div className='border-teal-200 border-[4px] h-[30vh] w-full bg-azure rounded-md p-4 flex justify-center items-center gap-4 '>

                        <div className='flex bg-teal-200 rounded-md h-[20.5vh] w-[20vw] p-4  flex-col gap-5 justify-start items-start'>
                            <p className='text-white font-bold text-2xl m-0'>
                                TOTAL PATIENT
                            </p>
                            <p className='text-white font-bold text-[2rem] m-0'>
                                35K
                            </p>

                        </div>
                        <div className='flex bg-teal-200 rounded-md h-[20.5vh] w-[20vw] p-4 flex-col gap-5 justify-start items-start'>
                            <p className='text-white font-bold text-2xl m-0'>
                                TOTAL PATIENT
                            </p>
                            <p className='text-white font-bold text-[2rem] m-0'>
                                35K
                            </p>

                        </div>

                        <div className='flex bg-teal-200 rounded-md h-[20.5vh] w-[20vw] p-4'>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hospital