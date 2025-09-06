"use client";
import { menus } from '@/app/utils/manus'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
    const menuRef = useRef();
    const [menuClick, setMenuClick] = useState("")
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuClick(""); // Close the modal if the click is outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside); // Use mousedown for earlier detection

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuClick]);
    return (
        <div className='relative'>
            <div className='navbar bg-white'>
                <div className='grid grid-cols-3 py-2'>
                    <div className='col-span-1'>
                        <div className='ratio w-[11rem]'>
                            <Image
                                src="/img/logo-nav.png"
                                height={1200}
                                width={1200}
                                alt="logo"
                            />
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex flex-row gap-6 justify-end items-center h-full text-primary'>
                            <div className='flex flex-row gap-6 text-2xl uppercase h-full justify-center items-center'>
                                {menus?.map((menu, index) => (
                                    <React.Fragment key={index}>
                                        {menu.children.length == 0 ?
                                            <Link href={menu.src}>
                                                {menu.name}
                                            </Link>
                                            :
                                            <div className=''>
                                                <span className='flex flex-row flex-nowrap gap-1 items-center cursor-pointer' onClick={(e) => setMenuClick(menu.id)}>
                                                    <span>
                                                        {menu.name}
                                                    </span>
                                                    <IoMdArrowDropdown size={20} className={menuClick == menu?.id ? "-rotate-180 transition-all duration-300" : ""} />
                                                </span>
                                                {menuClick == menu?.id && <div className='flex flex-col gap-3 absolute top-full bg-white min-w-28 px-3 pt-1 rounded-b-md shadow-md -translate-x-1/3' ref={menuRef}>
                                                    {menu?.children?.map((subMenu, subIndex) => (
                                                        <Link key={subIndex} href={subMenu.src}>
                                                            {subMenu.name}
                                                        </Link>
                                                    ))}
                                                </div>}
                                            </div>
                                        }
                                    </React.Fragment>
                                ))}
                                <div>
                                    <FiSearch />
                                </div>
                                <div>
                                    <button className='btn btn-primary'>
                                        +91 99980 98581
                                        <Image src="/img/icons/contact-us.svg" width={20} height={20} alt='contact-us' />
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
