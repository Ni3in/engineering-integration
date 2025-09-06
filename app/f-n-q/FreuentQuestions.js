"use client";
import { Collapse } from 'antd'
import Image from 'next/image';
import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IoIosArrowDropdownCircle } from 'react-icons/io'

export default function FreuentQuestions() {
    const items = [
        {
            key: "1",
            title: 'Is there a free trial available?',
            content: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, ersonalized 30-minute onboarding call to get you up and running as soon as possible.",

        },
        {
            key: "1",
            title: 'Is there a free trial available?',
            content: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, ersonalized 30-minute onboarding call to get you up and running as soon as possible.",

        },
        {
            key: "1",
            title: 'Is there a free trial available?',
            content: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, ersonalized 30-minute onboarding call to get you up and running as soon as possible.",

        },
        {
            key: "1",
            title: 'Is there a free trial available?',
            content: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, ersonalized 30-minute onboarding call to get you up and running as soon as possible.",

        },
    ]
    const [isOpen, setIsOpen] = useState([]);
    const [openKey, setOpenKey] = useState(null);

    const toggleAccordion = (index) => {
        if (openKey == index) {
            setOpenKey(null)
            return;
        }
        setOpenKey(index)
        // if (isOpen.includes(index)) {
        //     isOpen.splice(isOpen.indexOf(index), 1)
        //     // setIsOpen(!isOpen);
        // } else {
        //     setIsOpen(prev => ([...prev, index]));
        // }
    };
    return (
        <div className='container mx-auto pb-24'>
            <div className='grid grid-cols-2'>
                <div className='col-span-1'>
                    <div className='faq-bg h-full w-full relative'>
                        <div className='ratio ratio-1-1 w-96'>
                            <Image
                                src="/img/faq-img-1.png"
                                height={1200}
                                width={1200}
                                alt="logo"
                            />
                        </div>
                        <div className='h-full w-full absolute top-64 left-72'>
                            <h3 className='text-3xl faq-bg-2 ratio ratio-1-1 w-52 content-center p-4 text-center font-bold text-white'>
                                Any Other Question?
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div>
                        <div className='bg-gradient-to-r from-label to-[69px] to-transparent text-2xl'>
                            <label className='ps-2'>DO YOU NEES ANY HELP?</label>
                        </div>
                        <h3 className='text-3xl pt-3'>
                            Industry's frequently asked queries
                        </h3>
                    </div>
                    <div className='pt-6'>
                        {items.map((item, index) => (
                            <div key={index} className="border border-r-2 border-b-2 border-primary rounded-md mb-2 overflow-hidden transition-all duration-300">
                                {/* Accordion Header */}
                                <button
                                    className={`flex justify-between items-center w-full p-2 transition-[padding] duration-300 ${openKey == index ? 'ps-4' : ''} text-left text-primary font-semibold 
                                    tracking-[0.15em]
                                     focus:outline-none transition-colors duration-300
          ${openKey == index ? 'bg-primary text-white' : 'bg-white text-gray-800 hover:bg-gray-50 '}`}
                                    onClick={(e) => toggleAccordion(index)}
                                    aria-expanded={openKey == index}
                                >
                                    <span>{item.title}</span>
                                    {/* <svg
                                        className={`w-5 h-5 transition-transform duration-300 ${openKey == index ? 'rotate-180' : ''} ${openKey == index ? 'text-white' : 'text-gray-600'}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" // Chevron down icon
                                        />
                                    </svg> */}
                                    <div
                                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300
                                            ${openKey == index ? 'bg-white text-primary' : 'bg-primary text-white'}
                                            `}
                                    >
                                        <FiChevronDown
                                            className={`w-5 h-5 transition-transform duration-300 ${openKey == index ? 'rotate-180' : ''}`}
                                        />

                                    </div>
                                </button>

                                {/* Accordion Content */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${openKey == index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="p-4 text-primary">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
