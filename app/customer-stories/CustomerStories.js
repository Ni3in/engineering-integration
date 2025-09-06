"use client";
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const logos = Array.from({ length: 10 });

export default function CustomerStories() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <>
            <div className='customer-story-page py-6'>
                <div className='px-64 mx-auto'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='bg-gradient-to-r from-label to-[69px] to-transparent text-2xl'>
                            <label className='ps-2'>OUR CUSTOMER SAY</label>
                        </div>
                        <h3 className='text-4xl max-w-screen-lg'>
                            Here are some of our most valuable comments.
                        </h3>
                    </div>
                    <div className="w-full py-6 overflow-hidden relative">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            onSlideChange={(swiper) => setCurrentPage(swiper.realIndex + 1)}
                            onInit={(swiper) => setCurrentPage(swiper.realIndex + 1)}
                            className='border-2 border-primary rounded-xl'
                        >
                            {logos.map((_, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex items-center justify-between gap-4 p-4 h-48 bg-white">
                                        <div className='ratio ratio-1-1 w-40 rounded-xl'>
                                            <Image src="/img/client-1.png" width={1200} height={1200} alt='client-1' />
                                        </div>
                                        <div className='w-4/5'>
                                            <p className='text-[#808080] py-1'>
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, established fact that a reader will be distracted by  by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content,
                                            </p>
                                            <hr className='border-1 border-primary py-1' />
                                            <h3 className='text-2xl flex flex-nowrap text-primary gap-3'>
                                                <FaQuoteLeft /> <strong>Lorem Ipsum</strong>
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="absolute right-4 bottom-3 flex justify-center items-center gap-2 z-10 bg-primary text-white rounded-md">
                            <span
                                ref={prevRef}
                                className="text-white py-1 ps-2 rounded hover:bg-gray-900"
                            >
                                <FaChevronLeft fontSize={16} />
                            </span>
                            <strong className='w-5 flex justify-center items-center'>
                                {currentPage || 1}
                            </strong>
                            <span
                                ref={nextRef}
                                className="text-white py-1 pe-2 rounded hover:bg-gray-900"
                            >
                                <FaChevronRight fontSize={16} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
