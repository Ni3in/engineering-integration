import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'

export default function OurUpdates() {
    return (
        <>
            <div className='container mx-auto py-10'>
                <div className='mx-16 space-y-5'>
                    <div className='flex flex-col justify-start items-start text-center'>
                        <div className='bg-gradient-to-r from-label to-[69px] to-transparent text-2xl'>
                            <label className='ps-2'>WHAT WE DO FOR YOU!</label>
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <h3 className='text-4xl max-w-screen-sm'>
                                What's going on in our blog?
                            </h3>
                            <button className='btn btn-primary'>
                                VIEW ALL BLOGS
                                <BsArrowRightCircleFill />
                            </button>
                        </div>
                    </div>

                    <div className='grid grid-cols-12 gap-10'>
                        {Array.from({ length: 3 }).map((item, index) => (
                            <div key={index} className='col-span-4'>
                                <div className='ratio max-w-96'>
                                    <Image src="/img/blog-cover-img.png" width={1200} height={1200} alt='client-1' />
                                </div>
                                <h3 className='text-3xl font-bold text-primary pt-3'>
                                    What is Lorem Ipsum 4?
                                </h3>
                                {/* <hr className='border-1 border-primary pb-1' /> */}
                                <div className='flex flex-row flex-wrap justify-between border-t-2 border-slate-400'>
                                    <div className='flex flex-nowrap justify-start items-center gap-2'>
                                        <Image src="/img/icons/calender.svg" className='ratio-1-1' width={20} height={20} alt='contact-us' />
                                        <span className='text-[#808080] text-xl pt-1'>
                                            29 Jan 2025
                                        </span>
                                    </div>
                                    <Link href={"#"} className='text-primary text-xl pt-1'>
                                        Read More {'>'}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
