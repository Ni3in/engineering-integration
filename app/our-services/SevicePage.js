import Image from 'next/image'
import React from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'

export default function SevicePage() {
    return (
        <div className='container mx-auto h-screen mt-20'>
            <div className='service-banner relative'>
                <div className='service-bg pt-20'>
                    <div className='absolute top-0 left-0 -translate-y-1/2'>
                        <div className='w-2/3'>
                            <div className='bg-secondory px-8 h-40 max-h-40 rounded-tr-[45px] flex justify-center items-center'>
                                <div className='grid grid-cols-3'>
                                    <div className='col-span-1 flex flex-col gap-2 justify-center items-center'>
                                        {Array.from({ length: 3 }).map((_, index) => (
                                            <div key={index} className={`bg-transparent border-2 w-2.5 h-2.5 ${index % 2 == 0 ? "opacity-50" : ""}`}></div>
                                        ))}
                                    </div>
                                    <div className='col-span-2 flex flex-row flex-nowrap gap-4 justify-center items-center'>
                                        <div className='min-w-9 w-14'>
                                            <Image src="/img/icons/service-label-icon.svg" width={1200} height={1200} alt='about-us' />
                                        </div>
                                        <p className='text-white text-2xl'>{"The World's Most Powerful Industry"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <div className='bg-gradient-to-r from-label to-[69px] to-transparent text-2xl'>
                            <label className='ps-2'>WHAT WE DO FOR YOU!</label>
                        </div>
                        <h3 className='text-6xl max-w-screen-sm'>
                            Get best industrial services for your business
                        </h3>
                    </div>
                    <div className='absolute bottom-0 w-full'>
                        <div className='flex flex-row justify-center items-center gap-10 px-10'>
                            {Array.from({ length: 3 }).map((_, index) => (
                                <React.Fragment key={index}>
                                    <div className='w-80 relative'>
                                        <div className='w-full'>
                                            <Image src="/img/service-img.png" className='rounded-tl-[45px]' width={1200} height={1200} alt='about-us' />
                                        </div>
                                        <div className='pl-6 absolute top-full -translate-y-8'>
                                            <div className='bg-white shadow-xl rounded-br-[45px] max-h-72 py-4 px-6 flex flex-col gap-3'>
                                                <div className='flex flex-row gap-2'>
                                                    <strong className='text-xl'>Colloect damaged or failed hydraulic unit</strong>
                                                    <div className='min-w-9 w-14'>
                                                        <Image src="/img/icons/sevice-card-icon.svg" width={1200} height={1200} alt='about-us' />
                                                    </div>
                                                </div>
                                                <p className='text-[#808080]'>We serve our clients top level of trusted advisor for their busin & marketing progress.</p>
                                                <div>
                                                    <button className='btn btn-primary'>
                                                        LEARN MORE
                                                        <BsArrowRightCircleFill />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
