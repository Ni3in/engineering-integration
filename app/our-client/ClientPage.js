"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const logos = Array.from({ length: 10 });

export default function ClientPage() {
    return (
        <>
            <div className='client-page'>
                <div className='container mx-auto'>
                    <div className='flex flex-col justify-center items-center gap-5 py-6'>
                        <div className='bg-gradient-to-r from-label to-[69px] to-transparent text-2xl'>
                            <label className='ps-2'>Lorem Ipsum Doller Sit</label>
                        </div>
                        <h3 className='text-4xl max-w-screen-lg'>
                            Lorem Ipsum is simply dummy text of the
                        </h3>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <div>
                            <span className='text-primary'>
                                <strong className='text-9xl'>150</strong> <span className='inline-block align-top text-6xl'>+</span>
                            </span>
                            <span className='text-xl'> Clients</span>
                        </div>
                        <div>
                            <span className='text-primary'>
                                <strong className='text-9xl'>75</strong> <span className='inline-block align-top text-6xl'>+</span>
                            </span>
                            <span className='text-xl'> Lorem Ipsum</span>
                        </div>
                        <div>
                            <span className='text-primary'>
                                <strong className='text-9xl'>20</strong> <span className='inline-block align-top text-6xl'>+</span>
                            </span>
                            <span className='text-xl'> Lorem Ipsum</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-10'>
                <div className="w-full py-6 overflow-hidden bg-white">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={40}
                        slidesPerView={5}
                        loop={true}
                        autoplay={{
                            delay: 100,
                            disableOnInteraction: false,
                        }}
                        speed={3000} // Slow and smooth
                        grabCursor
                    >
                        {logos.map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center h-24">
                                    <strong className="text-6xl">LOGO</strong>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}
