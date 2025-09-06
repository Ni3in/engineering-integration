import Image from 'next/image'
import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function About() {
    let progressOnePr = "75%";
    let progressTwoPr = "85%";
    return (
        <div className='container mx-auto py-8'>
            <div className='grid grid-cols-2 space-x-10 mx-16'>
                <div className='col-span-1 py-7'>
                    <div className='bg-gradient-to-r from-label to-[69px] to-transparent text-2xl'>
                        <label className='ps-2'>ABOUT OUR INDUSTRY</label>
                    </div>
                    <div className='flex flex-col justify-between items-start py-2 gap-5'>
                        <h3 className='text-6xl'>
                            We are largest independent sit manufacturing
                        </h3>
                        <p className='text-2xl'>
                            We serve our clients top level of trusted advisor for their busin & marketing progress.We serve our clients top level of trusted advisor for their business & marketing progress.trusted advisor
                        </p>
                        <div className='with-icon-list'>
                            <ul className='text-xl text-primary'>
                                <li>
                                    Lorem Ipsum doller sit text new doller si
                                </li>
                                <li>
                                    Lorem Ipsum doller sit text new doller si
                                </li>
                                <li>
                                    Lorem Ipsum doller sit text new doller si
                                </li>
                            </ul>
                        </div>
                        <div className='border-b-2 border-primary w-full'>
                            <label className='text-xl'>Quality Control System</label>
                            <div className="flex w-full h-5 border-b-4 border-white relative" role="progressbar" aria-valuenow={progressOnePr} aria-valuemin="0" aria-valuemax="100">
                                <label className='absolute bottom-0 -translate-y-1/2 -translate-x-6 text-secondory' style={{ marginLeft: progressOnePr }} >{progressOnePr}</label>
                                <div className="flex flex-col justify-center overflow-hidden bg-secondory text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: progressOnePr }}></div>
                            </div>
                        </div>

                        <div className='border-b-2 border-primary w-full'>
                            <label className='text-xl'>Highly Professional Staff</label>
                            <div className="flex w-full h-5 border-b-4 border-white relative" role="progressbar" aria-valuenow={progressTwoPr} aria-valuemin="0" aria-valuemax="100">
                                <label className='absolute bottom-0 -translate-y-1/2 -translate-x-6 text-secondory' style={{ marginLeft: progressTwoPr }} >{progressTwoPr}</label>
                                <div className="flex flex-col justify-center overflow-hidden bg-secondory text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: progressTwoPr }}></div>
                            </div>
                        </div>
                        <div>
                            <button className='btn btn-primary'>
                                CONTACT NOW
                                <BsArrowRightCircleFill />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 relative'>
                    <div className='ratio ps-7 pt-7'>
                        <Image src="/img/banner-about.png" width={1200} height={1200} alt='about-us' />
                    </div>
                    <div className='bg-blue-900 -z-10 w-1/2 h-2/5 absolute top-0 left-0 rounded-tr-[3rem]'></div>
                </div>
            </div>
        </div>
    )
}

