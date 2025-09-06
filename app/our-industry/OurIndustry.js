import Image from 'next/image'
import React from 'react'

export default function OurIndustry() {
    const menus1 = [
        {
            icon: "zoom-glass",
            desc: "Every micron matters at UTE",
            width: "w-14"
        },
        {
            icon: "ideas",
            desc: "Continuously adapting new ideas & technology through R&D",
            width: "w-14"
        },
        {
            icon: "service-label-icon",
            desc: "Most trusted name in refurbishing Hydraulic units",
            width: "w-12"
        },

    ]
    const menus2 = [
        {
            icon: "economic",
            desc: "UTE delivers the best of both “Economical” & “Reliable”",
            width: "w-12"
        },
        {
            icon: "thumbs-up",
            desc: "Accepting challenges since 1991",
            width: "w-14"
        },
        {
            icon: "network",
            desc: "Wide network of vendors & OEM Suppliers",
            width: "w-14"
        },

    ]
    return (
        <>
            <div className='relative'>
                <div className='bg-industry'>
                    <div className='px-40 mx-auto'>
                        <div className='grid grid-cols-12 idustry-img'>
                            <div className='min-w-[20rem] w-[30rem] absolute right-0 bottom-0'>
                                <Image src="/img/industry-img.png" width={1200} height={1200} alt='about-us' />
                            </div>
                            <div className='col-span-10 h-screen flex flex-col gap-5 py-10'>
                                <div className='flex flex-col gap-5'>
                                    <div className='bg-gradient-to-r from-label to-[69px] to-transparent text-2xl'>
                                        <label className='ps-2'>WHAT WE DO FOR YOU!</label>
                                    </div>
                                    <h3 className='text-5xl max-w-screen-sm'>
                                        {"Recognized as one of the World's leading Industry & Corporation!"}
                                    </h3>
                                    <p className='text-2xl'>
                                        {"We serve our clients top level of trusted advisor for their busin & marketing progres. We serve our clients top level of trusted advisor for their business"}
                                    </p>
                                </div>
                                <div className='flex flex-row h-full gap-10'>
                                    <div className='flex flex-col justify-between gap-5'>
                                        {menus1.map((item, index) => (
                                            <div key={index} className='flex justify-start items-center gap-5'>
                                                <div className='rounded-full bg-secondory ratio ratio-1-1 min-w-24 content-center'>
                                                    <div className={`${item?.width} mx-auto`}>
                                                        <Image src={`/img/icons/${item.icon}.svg`} width={1200} height={1200} alt='zoom-glass' />
                                                    </div>
                                                </div>
                                                <p className='text-2xl'>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex flex-col justify-between gap-5'>
                                        {menus2.map((item, index) => (
                                            <div key={index} className='flex justify-start items-center gap-5'>
                                                <div className='rounded-full bg-secondory ratio ratio-1-1 min-w-24 content-center'>
                                                    <div className={`${item?.width} mx-auto`}>
                                                        <Image src={`/img/icons/${item.icon}.svg`} width={1200} height={1200} alt='zoom-glass' />
                                                    </div>
                                                </div>
                                                <p className='text-2xl'>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
