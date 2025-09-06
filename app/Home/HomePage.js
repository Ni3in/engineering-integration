
"use client";
import Image from 'next/image';
import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function HomePage() {
    return (
        <div className='flex flex-row flex-nowrap'>
            <div className='home-page'>
                <div className='text-white flex flex-col justify-center items-center gap-3 h-full'>
                    <div className='flex flex-col justify-center items-center' >
                        <h2 className='text-5xl tracking-[0.2em]'>
                            LOREM IPSUM
                        </h2>
                        <h1 className='text-[16rem] leading-[14rem] inline-block h-48'>
                            LOREM IPSUM
                        </h1>
                        <p className='text-4xl'>
                            in repairing and refurbishing hydraulic units
                        </p>
                    </div>
                    <div>
                        <button className='btn btn-secondary'>
                            CONTACT NOW
                            <BsArrowRightCircleFill />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center w-full'>
                <div className='flex flex-col justify-center items-center gap-3 w-full h-full'>
                    <p className='text-xl text-primary py-3 follow-us-text'>
                        FOLLOW US
                    </p>
                    <div className='flex justify-center'>
                        <div className='h-[80px] min-h-[1em] w-0.5 self-stretch bg-primary'></div>
                    </div>
                    <Image src="/img/icons/linkedIn.svg" className='ratio-1-1' width={25} height={25} alt='contact-us' />
                    <Image src="/img/icons/facebook.svg" className='ratio-1-1' width={25} height={25} alt='contact-us' />
                    <Image src="/img/icons/instagram.svg" className='ratio-1-1' width={25} height={25} alt='contact-us' />
                    <Image src="/img/icons/twitterX.svg" className='ratio-1-1' width={25} height={25} alt='contact-us' />
                </div>
            </div>
        </div>
    )
}
